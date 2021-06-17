import Joi from "joi";

const putCountrySchema = Joi.object().keys({
  name: Joi.string(),
  description: Joi.string(),
  title: Joi.string(),
  textSeo: Joi.string(),
  countryCode: Joi.string(),
});

export default putCountrySchema;
