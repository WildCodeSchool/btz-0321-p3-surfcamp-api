import Joi from "joi";

const postFeatureSchema = Joi.object().keys({
  label: Joi.string().min(1).max(50).required(),
  propertyId: Joi.string().required(),
  iconUrl: Joi.string().required(),
});

export default postFeatureSchema;
