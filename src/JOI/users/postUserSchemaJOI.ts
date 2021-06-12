import Joi from "joi";

const postUserSchema = Joi.object().keys({
  firstname: Joi.string().min(1).max(50).required(),
  lastname: Joi.string().min(1).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().alphanum().min(6).max(30).required(),
  confirmPassword: Joi.string().min(6).max(30).required(),
  picture: Joi.string().required(),
  birthDate: Joi.date().iso().required(),
  phoneNumber: Joi.string().required(),
});

export default postUserSchema;
