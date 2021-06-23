import Joi from "joi";

const postUserSchema = Joi.object().keys({
  firstname: Joi.string().alphanum().min(3).max(30).required(),
  lastname: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email({ allowUnicode: false }).required(),
  password: Joi.string()
    .pattern(
      new RegExp(
        /^(?=.*[A-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_{|}~`])\S{6,12}$/
      )
    )
    .required(),
  confirmPassword: Joi.ref("password"),
  birthDate: Joi.date().iso().required(),
  phoneNumber: Joi.string().required(),
  picture: Joi.string().required(),
});

export default postUserSchema;
