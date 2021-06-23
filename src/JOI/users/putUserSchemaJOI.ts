import Joi from "joi";

const putUserSchema = Joi.object().keys({
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
  birthDate: Joi.date().iso().min("1-1-1900").max("now").required(),
  phoneNumber: Joi.string().min(10).max(10).required(),
  picture: Joi.string().uri().required(),
});

export default putUserSchema;
