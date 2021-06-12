import Joi from "joi";

const putRoomSchema = Joi.object().keys({
  name: Joi.string().alphanum().min(1).max(50),
  description: Joi.string().alphanum().min(1).max(2000),
  capacity: Joi.number().min(1).max(100),
  priceByNight: Joi.number().min(1).max(2000),
  propertyId: Joi.string().required(),
});

export default putRoomSchema;
