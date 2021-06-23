import Joi from "joi";

const postRoomSchema = Joi.object().keys({
  name: Joi.string().min(1).max(50).required(),
  description: Joi.string().min(1).max(2000).required(),
  capacity: Joi.number().min(1).max(100).required(),
  priceByNight: Joi.number().min(1).required(),
  propertyId: Joi.string().required(),
});

export default postRoomSchema;
