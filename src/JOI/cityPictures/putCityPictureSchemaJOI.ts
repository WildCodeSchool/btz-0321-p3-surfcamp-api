import Joi from "joi";

const putCityPictureSchema = Joi.object().keys({
  name: Joi.string(),
  url: Joi.string(),
  cityId: Joi.string(),
});

export default putCityPictureSchema;
