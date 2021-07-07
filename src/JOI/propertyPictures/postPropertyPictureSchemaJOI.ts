import Joi from "joi";

const postPropertyPictureSchema = Joi.object().keys({
  name: Joi.string().min(1).max(50).required(),
  description: Joi.string().min(1).max(2000).required(),
  url: Joi.string().min(1).required(),
  propertyId: Joi.string().required(),
});

export default postPropertyPictureSchema;
