import Joi from "joi";

const putRoomSchema = Joi.object().keys({
  name: Joi.string().min(1).max(50),
  description: Joi.string().min(1).max(2000).required(),
  capacity: Joi.number().min(1).max(100),
  priceByNight: Joi.number().min(1),
  propertyId: Joi.string(),
});

export default putRoomSchema;
