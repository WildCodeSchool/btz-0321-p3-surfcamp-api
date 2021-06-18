import Joi from "joi";

const putFeatureSchema = Joi.object().keys({
  label: Joi.string(),
  type: Joi.string(),
  propertyId: Joi.string(),
  iconUrl: Joi.string(),
});

export default putFeatureSchema;
