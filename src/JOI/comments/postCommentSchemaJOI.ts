import Joi from "joi";

const postCommentSchema = Joi.object().keys({
  comment: Joi.string().required(),
  rate: Joi.number().required(),
  userId: Joi.string().required(),
  reservationId: Joi.string().required(),
});

export default postCommentSchema;
