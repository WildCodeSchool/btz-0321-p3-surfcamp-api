import Joi from "joi";

const putFeatureSchema = Joi.object().keys({
  label: Joi.string().min(1).max(50),
  type: Joi.string().min(1).max(50),
  propertyId: Joi.string(),
  iconUrl: Joi.string(),
});

export default putFeatureSchema;
