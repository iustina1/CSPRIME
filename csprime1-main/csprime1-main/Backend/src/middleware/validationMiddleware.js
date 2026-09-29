const { z } = require('zod');

const moduleIdSchema = z.object({
  moduleId: z.string().min(1, 'Module id is required'),
});

const topicIdSchema = z.object({
  topicId: z.string().min(1, 'Topic id is required'),
});

const querySchema = z.object({
  year: z.string().optional().transform((value) => (value === undefined ? undefined : Number(value))),
  semester: z.string().optional().transform((value) => (value === undefined ? undefined : Number(value))),
  topicId: z.string().optional(),
  page: z.string().optional().transform((value) => (value === undefined ? undefined : Number(value))),
  limit: z.string().optional().transform((value) => (value === undefined ? undefined : Number(value))),
}).refine((value) => {
  if (value.year !== undefined && Number.isNaN(value.year)) return false;
  if (value.semester !== undefined && Number.isNaN(value.semester)) return false;
  if (value.page !== undefined && Number.isNaN(value.page)) return false;
  if (value.limit !== undefined && Number.isNaN(value.limit)) return false;
  return true;
}, { message: 'Invalid numeric query parameters', path: ['year'] });

const validate = (schema, target = 'body') => (req, res, next) => {
  try {
    const data = target === 'params' ? req.params : target === 'query' ? req.query : req.body;
    schema.parse(data);
    next();
  } catch (error) {
    const details = error.errors?.map((item) => item.message).join(', ') || 'Validation failed';
    return res.status(400).json({
      success: false,
      message: details,
      error: { code: 'VALIDATION_ERROR' },
    });
  }
};

module.exports = {
  validate,
  moduleIdSchema,
  topicIdSchema,
  querySchema,
};
