import Joi from "joi";

const postCitySchema = Joi.object().keys({
  name: Joi.string().required(),
  description: Joi.string().min(50).max(2000),
  title: Joi.string(),
  textSeo: Joi.string(),
});

export default postCitySchema;
