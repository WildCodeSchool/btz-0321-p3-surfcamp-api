import Joi from "joi";

const postCityPictureSchema = Joi.object().keys({
  name: Joi.string().min(1).max(50).required(),
  url: Joi.string().required(),
  cityId: Joi.string().required(),
});

export default postCityPictureSchema;
