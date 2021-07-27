import AddressHandlers from "./interfaces";

import getAll from "./getAll";
import getOne from "./getOne";
import post from "./post";
import put from "./put";
import deleteOne from "./delete";

/**
 * A address (with id for output display)
 * @typedef {object} DisplayAddress
 * @property {string} id
 * @property {string} zipcode
 * @property {string} city
 * @property {string} cityId
 * @property {string} street
 * @property {string} streetNumber
 * @property {string} lat
 * @property {string} long
 * @property {string} country
 * @property {string} countryId
 * @property {string} user
 * @property {string} property
 * @property {string} createdAt

 */

/**
 * a address (for Post body)
 * @typedef {object} PostAddress
 * @property {string} cityId
 * @property {string} countryId
 * @property {string} lat
 * @property {string} zipcode
 * @property {string} streetNumber
 * @property {string} street
 * @property {string} long
 */

/**
 * a address (for PUT body)
 * @typedef {object} UpdateAddress
 * @property {string} cityId
 * @property {string} id
 * @property {string} countryId
 * @property {string} lat
 * @property {string} long
 * @property {string} street
 * @property {string} streetNumber
 * @property {string} zipcode
 */

const controllers: AddressHandlers = {
  getAll,
  getOne,
  post,
  put,
  delete: deleteOne,
};

export default controllers;
