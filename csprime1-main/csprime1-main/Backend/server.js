const app = require('./src/app');
const env = require('./src/config/env');

const PORT = env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`CSPrime backend running on http://localhost:${PORT}`);
});
