import Joi from "joi";

const postUserSchema = Joi.object().keys({
  firstname: Joi.string().alphanum().min(3).max(30).required(),
  lastname: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email({ allowUnicode: false }).required(),
  password: Joi.string()
    .pattern(
      new RegExp(
        /^(?=.*[A-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_{|}~`])\S{8,30}$/
      )
    )
    .required(),
  confirmPassword: Joi.ref("password"),
  birthDate: Joi.date().iso().min("1-1-1900").max("now"),
  phoneNumber: Joi.string().min(10).max(10),
  picture: Joi.string().uri(),
  addressId: Joi.string(),
  propertyId: Joi.string(),
  role: Joi.string(),
  isActive: Joi.bool(),
  address: Joi.any(),
  property: Joi.any(),
  reservations: Joi.any(),
});

export default postUserSchema;
