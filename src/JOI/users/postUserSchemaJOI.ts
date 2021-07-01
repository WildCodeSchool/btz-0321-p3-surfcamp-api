import Joi from "joi";

const postUserSchema = Joi.object().keys({
  firstname: Joi.string().alphanum().min(3).max(30),
  lastname: Joi.string().alphanum().min(3).max(30),
  email: Joi.string().email({ allowUnicode: false }).required(),
  password: Joi.string().required(),
  confirmPassword: Joi.ref("password"),
  birthDate: Joi.date().iso().min("1-1-1900").max("now"),
  phoneNumber: Joi.string(),
  picture: Joi.string().uri(),
  addressId: Joi.string(),
  address: Joi.any(),
  property: Joi.any(),
  reservations: Joi.any(),
});

export default postUserSchema;
