const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');
const env = require('./config/env');
const authRoutes = require('./routes/authRoutes');
const moduleRoutes = require('./routes/moduleRoutes');
const topicRoutes = require('./routes/topicRoutes');
const analyticsRoutes = require('./routes/analyticsRoutes');
const faqRoutes = require('./routes/faqRoutes');
const testimonialRoutes = require('./routes/testimonialRoutes');
const { notFoundHandler, errorHandler } = require('./middleware/errorMiddleware');

const app = express();
app.disable('etag');

const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = new Set([
      env.FRONTEND_URL,
      'http://localhost:3000',
      'http://127.0.0.1:3000',
      'http://localhost:3001',
      'http://127.0.0.1:3001',
    ]);

    const isLocalFrontend = /^http:\/\/(localhost|127\.0\.0\.1|\[::1\]):\d+$/.test(origin || '');

    if (!origin || allowedOrigins.has(origin) || (env.NODE_ENV !== 'production' && isLocalFrontend)) {
      callback(null, true);
      return;
    }

    callback(new Error('CORS policy violation'));
  },
  credentials: true,
};

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many requests. Please try again later.',
    error: { code: 'RATE_LIMIT_EXCEEDED' },
  },
});

app.use(cors(corsOptions));
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));
app.use('/api', apiLimiter);

app.get('/api/v1/health', (req, res) => {
  res.status(200).json({ success: true, data: { status: 'ok' }, message: 'Server healthy' });
});

if (env.NODE_ENV !== 'production') {
  app.get(['/', '/modules', '/modules/*', '/topics', '/topics/*', '/analytics', '/faq', '/about', '/auth'], (req, res) => {
    res.redirect(`${env.FRONTEND_URL}${req.originalUrl}`);
  });
}

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/modules', moduleRoutes);
app.use('/api/v1/topics', topicRoutes);
app.use('/api/v1/analytics', analyticsRoutes);
app.use('/api/v1/faqs', faqRoutes);
app.use('/api/v1/testimonials', testimonialRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
