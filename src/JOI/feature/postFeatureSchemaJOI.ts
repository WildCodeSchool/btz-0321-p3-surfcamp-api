import Joi from "joi";

const postFeatureSchema = Joi.object().keys({
  label: Joi.string().required(),
  type: Joi.string().required(),
  propertyId: Joi.string().required(),
});

export default postFeatureSchema;
