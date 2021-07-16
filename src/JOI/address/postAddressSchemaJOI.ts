import Joi from "joi";

const postAddressSchema = Joi.object().keys({
  zipcode: Joi.string().required(),
  street: Joi.string().required(),
  streetNumber: Joi.string().required(),
  lat: Joi.string(),
  long: Joi.string(),
  cityId: Joi.string().required(),
  countryId: Joi.string().required(),
});

export default postAddressSchema;
