import Joi from "joi";

const postCitySchema = Joi.object().keys({
  name: Joi.string().required(),
  description: Joi.string().min(50).max(2000).required(),
  title: Joi.string().required(),
  textSeo: Joi.string().required(),
  countryCode: Joi.string().required(),
});

export default postCitySchema;
