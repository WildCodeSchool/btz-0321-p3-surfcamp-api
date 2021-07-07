import Joi from "joi";

const postCommentSchema = Joi.object().keys({
  comment: Joi.string().min(20).max(500).required(),
  rate: Joi.number().min(1).max(5).required(),
  userId: Joi.string().required(),
  reservationId: Joi.string().required(),
});

export default postCommentSchema;
