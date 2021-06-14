import Joi from "joi";

const putCommentSchema = Joi.object().keys({
  comment: Joi.string(),
  rate: Joi.number(),
  userId: Joi.string(),
  reservationId: Joi.string(),
});

export default putCommentSchema;
