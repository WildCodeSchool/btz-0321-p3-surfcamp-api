import Joi from "joi";

const putPropertyPictureSchema = Joi.object().keys({
  name: Joi.string().min(1).max(50),
  description: Joi.string().min(1).max(2000),
  url: Joi.string().min(1),
  propertyId: Joi.string(),
});

export default putPropertyPictureSchema;
