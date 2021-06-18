import Joi from "joi";

const postCountryPictureSchema = Joi.object().keys({
  name: Joi.string().required(),
  url: Joi.string().required(),
  countryId: Joi.string().required(),
});

export default postCountryPictureSchema;
