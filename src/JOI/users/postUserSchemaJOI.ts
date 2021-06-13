const Joi = require("joi");

const postUserSchema = Joi.object().keys({
  firstname: Joi.string().alphanum().min(3).max(50).required(),
  lastname: Joi.string().alphanum().min(3).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  confirmPassword: Joi.string().required(),
  picture: Joi.string(),
  birthDate: Joi.date().iso().required(),
  phoneNumber: Joi.string().required(),
});

export default postUserSchema;
