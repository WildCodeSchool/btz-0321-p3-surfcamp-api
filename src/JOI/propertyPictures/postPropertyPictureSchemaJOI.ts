import Joi from "joi";

const postPropertyPictureSchema = Joi.object().keys({
  name: Joi.string().required(),
  description: Joi.string().required(),
  url: Joi.string().required(),
  propertyId: Joi.string().required(),
});

export default postPropertyPictureSchema;
