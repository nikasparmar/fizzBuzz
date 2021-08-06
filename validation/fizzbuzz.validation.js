import Joi from 'joi';

export const fizzBuzzValidation = {
  query: Joi.object().keys({
    count: Joi.number().min(1).required().messages({
      'count.less': 'Count should be more than 0'
    })
  })
};

export default fizzBuzzValidation;
