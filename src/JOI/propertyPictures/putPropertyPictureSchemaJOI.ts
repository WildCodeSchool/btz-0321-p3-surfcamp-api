import Joi from "joi";

const putPropertyPictureSchema = Joi.object().keys({
  name: Joi.string(),
  description: Joi.string(),
  url: Joi.string(),
  propertyId: Joi.string(),
});

export default putPropertyPictureSchema;
