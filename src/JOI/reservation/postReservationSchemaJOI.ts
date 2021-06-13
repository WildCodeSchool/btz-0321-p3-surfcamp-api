import Joi from "joi";

const postReservationSchema = Joi.object().keys({
  customerCount: Joi.number().min(1).max(2000).required(),
  startDate: Joi.date().required(),
  endDate: Joi.date().required(),
  status: Joi.string().required(),
  propertyId: Joi.string(),
  roomId: Joi.string(),
  userId: Joi.string().required(),
});

export default postReservationSchema;
