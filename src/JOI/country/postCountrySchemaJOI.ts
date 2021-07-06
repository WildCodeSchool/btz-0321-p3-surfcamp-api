import Joi from "joi";

const postCountrySchema = Joi.object().keys({
  name: Joi.string().min(1).max(100).required(),
  description: Joi.string().min(1).max(2000).required(),
  title: Joi.string().min(1).max(200).required(),
  textSeo: Joi.string().min(1).max(2000).required(),
  countryCode: Joi.string().min(1).required(),
});

export default postCountrySchema;
