import Joi from "joi";

const putAddressSchema = Joi.object().keys({
  zipcode: Joi.string(),
  street: Joi.string(),
  streetNumber: Joi.string(),
  lat: Joi.string(),
  long: Joi.string(),
  cityId: Joi.string(),
  countryId: Joi.string(),
});

export default putAddressSchema;
