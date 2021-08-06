import Joi from 'joi';
import httpStatus from 'http-status';
import pick from 'lodash/pick.js';

const validate = (schema) => (req, res, next) => {
  const options = {
    errors: {
      wrap: {
        label: ''
      }
    }
  };
  const validSchema = schema;
  const object = pick(req, Object.keys(validSchema));
  const { value, error } = Joi.compile(validSchema)
    .prefs({ errors: { label: 'key' } })
    .validate(object, options);
  if (error) {
    const errorMessage = error.details.map((details) => details.message).join(', ');
    res.status(httpStatus.BAD_REQUEST).json({ error: errorMessage });
  }
  Object.assign(req, value);
  return next();
};

export default validate;
