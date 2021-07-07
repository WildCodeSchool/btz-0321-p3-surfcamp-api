import Joi from "joi";

const putReservationSchema = Joi.object().keys({
  customerCount: Joi.number().min(1).max(2000),
  startDate: Joi.date(),
  endDate: Joi.date(),
  status: Joi.string(),
  propertyId: Joi.string(),
  roomId: Joi.string(),
  userId: Joi.string(),
});

export default putReservationSchema;
