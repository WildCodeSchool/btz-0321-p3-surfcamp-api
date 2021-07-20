import CityHandlers from "./interfaces";

import getAll from "./getAll";
import getOne from "./getOne";
import getCityPictures from "./getCityPictures";
import post from "./post";
import put from "./put";
import deleteOne from "./delete";

/**
 * A city (with id for output display)
 * @typedef {object} DisplayCity
 * @property {string} id
 * @property {string} name
 * @property {string} title
 * @property {string} description
 * @property {string} textSeo
 * @property {string} country
 * @property {string} countryId
 * @property {string} address
 * @property {string} cityPictures
 * @property {string} createdAt
 */

/**
 * a city (for Post body)
 * @typedef {object} CreateCity
 * @property {string} name
 * @property {string} description
 * @property {string} countryId
 * @property {string} title
 * @property {string} textSeo
 */

/**
 * a City (for PUT body)
 * @typedef {object} UpdateCity
 * @property {string} name
 * @property {string} description
 * @property {string} countryId
 * @property {string} title
 * @property {string} textSeo
 */

const controllers: CityHandlers = {
  getAll,
  getOne,
  getCityPictures,
  post,
  put,
  delete: deleteOne,
};

export default controllers;
