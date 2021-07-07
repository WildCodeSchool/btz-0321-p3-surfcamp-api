import Joi from "joi";

const putCommentSchema = Joi.object().keys({
  comment: Joi.string().min(20).max(500),
  rate: Joi.number().min(1).max(5),
  userId: Joi.string(),
  reservationId: Joi.string(),
});

export default putCommentSchema;
