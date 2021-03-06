import Joi from "joi";

const postPropertySchema = Joi.object().keys({
  name: Joi.string().min(1).max(50).required(),
  description: Joi.string().min(1).max(2000).required(),
  type: Joi.string().required(),
  priceByNight: Joi.number().min(1).required(),
  addressId: Joi.string().required(),
  userId: Joi.string().required(),
  phoneNumber: Joi.string().required(),
});

export default postPropertySchema;
