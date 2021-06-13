const Joi = require("joi");

const postUserSchema = Joi.object().keys({
    id: Joi.string().alphanum().min(3).max(50).required(),
    firstName: Joi.string().alphanum().min(3).max(50).required(),
    lastName: Joi.string().alphanum().min(3).max(50).required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    picture: Joi.string(),
    birthDate: Joi.date().max("1-1-2004").iso().required(),
    phoneNumber: Joi.string().required(),
  });

  export default postUserSchema