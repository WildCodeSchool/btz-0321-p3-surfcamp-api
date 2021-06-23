import Joi from "joi";

const putUserSchema = Joi.object().keys({
  firstname: Joi.string().min(1).max(50),
  lastname: Joi.string().min(1).max(50),
  email: Joi.string().email(),
  password: Joi.string().min(6).max(30),
  picture: Joi.string(),
  birthDate: Joi.date().iso(),
  phoneNumber: Joi.string(),
  role: Joi.string(),
  isActive: Joi.boolean(),
});

export default putUserSchema;
