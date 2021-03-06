import Joi from "joi";

const putPropertySchema = Joi.object().keys({
  name: Joi.string().min(1).max(50),
  description: Joi.string().min(1).max(2000),
  type: Joi.string(),
  priceByNight: Joi.number().min(1),
  addressId: Joi.string(),
  userId: Joi.string(),
  phoneNumber: Joi.string(),
});

export default putPropertySchema;
