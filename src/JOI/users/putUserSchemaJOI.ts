import Joi from "joi";

const putUserSchema = Joi.object().keys({
  firstname: Joi.string().alphanum().min(3).max(30),
  lastname: Joi.string().alphanum().min(3).max(30),
  email: Joi.string().email({ allowUnicode: false }),
  password: Joi.string(),
  birthDate: Joi.date().iso().min("1-1-1900").max("now"),
  phoneNumber: Joi.string(),
  picture: Joi.string().uri(),
  addressId: Joi.string(),
  role: Joi.string(),
  isActive: Joi.bool(),
  address: Joi.any(),
  property: Joi.any(),
  reservations: Joi.any(),
});

export default putUserSchema;
