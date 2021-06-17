import Joi from "joi";

const putCountryPictureSchema = Joi.object().keys({
  name: Joi.string(),
  url: Joi.string(),
  countryId: Joi.string(),
});

export default putCountryPictureSchema;
