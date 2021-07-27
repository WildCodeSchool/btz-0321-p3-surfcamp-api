import PropertyHandlers from "./interfaces";

import getAll from "./getAll";
import getOne from "./getOne";
import getComments from "./getComments";
import getAddresses from "./getAddresses";
import getCity from "./getCity";
import getCountry from "./getCountry";
import getFeatures from "./getFeatures";
import post from "./post";
import put from "./put";
import deleteOne from "./delete";
import search from "./search";

/**
 * A property (with id for output display)
 * @typedef {object} DisplayProperty
 * @property {string} id.required - "1"
 * @property {string} name - "Beach House"
 * @property {string} description - "this is a beautiful place in front of the beach"
 * @property {string} type - " SURFHOUSE"
 * @property {string} priceByNight - "25$"
 * @property {string} addressId - ""
 * @property {string} features - ""
 * @property {string} comments - ""
 * @property {string} phoneNumber - "+33601020304"
 * @property {string} UserId - ""
 */

/**
 * A property (for POST body)
 * @typedef {object} PostProperty
 * @property {string} name -"Beach House"
 * @property {string} description -"this is a beautiful place in front of the beach"
 * @property {string} type -"SURFHOUSE"
 * @property {string} priceByNight -"25"
 * @property {string} addressId -""
 * @property {string} userId -""
 */

/**
 * A property (for PUT body)
 * @typedef {object} UpdateProperty
 *@property {string} name -"Beach House"
 * @property {string} description -"this is a beautiful place in front of the beach"
 * @property {string} type -"SURFHOUSE"
 * @property {string} priceByNight -"25"
 * @property {string} phoneNumber -"+33601020304"
 */

/**
 * A property (with id for output display)
 * @typedef {object} DisplayAddress
 * @property {string} addressId
 * @property {string} zipcode
 * @property {string} city
 * @property {string} cityId
 * @property {string} street
 * @property {string} streetNumber
 * @property {string} country
 * @property {string} countryId
 */

const controllers: PropertyHandlers = {
  getAll,
  getOne,
  getComments,
  getAddresses,
  getCity,
  getCountry,
  getFeatures,
  post,
  put,
  delete: deleteOne,
  search,
};

export default controllers;
