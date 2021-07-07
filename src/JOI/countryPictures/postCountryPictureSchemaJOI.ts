import Joi from "joi";

const postCountryPictureSchema = Joi.object().keys({
  name: Joi.string().min(1).max(50).required(),
  url: Joi.string().required(),
  countryId: Joi.string().required(),
});

export default postCountryPictureSchema;
