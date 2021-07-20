import Joi from "joi";

const postCountrySchema = Joi.object().keys({
  name: Joi.string().min(1).max(100).required(),
  description: Joi.string().min(1).max(2000),
  title: Joi.string().min(1).max(200),
  textSeo: Joi.string().min(1).max(2000),
  countryCode: Joi.string().min(1),
});

export default postCountrySchema;
