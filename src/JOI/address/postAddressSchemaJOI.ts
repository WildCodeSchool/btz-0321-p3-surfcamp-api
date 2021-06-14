import Joi from "joi";

const postAddressSchema = Joi.object().keys({
  zipcode: Joi.string().required(),
  city: Joi.string().required(),
  street: Joi.string().required(),
  streetNumber: Joi.string().required(),
  lat: Joi.number().required(),
  long: Joi.number().required(),
  countryCode: Joi.string().required(),
});

export default postAddressSchema;
