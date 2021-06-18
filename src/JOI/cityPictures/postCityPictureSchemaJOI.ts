import Joi from "joi";

const postCityPictureSchema = Joi.object().keys({
  name: Joi.string().required(),
  url: Joi.string().required(),
  cityId: Joi.string().required(),
});

export default postCityPictureSchema;
