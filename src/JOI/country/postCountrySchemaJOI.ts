import Joi from "joi";

const postCountrySchema = Joi.object().keys({
  name: Joi.string().required(),
  description: Joi.string().required(),
  title: Joi.string().required(),
  textSeo: Joi.string().required(),
  countryCode: Joi.string().required(),
});

export default postCountrySchema;
