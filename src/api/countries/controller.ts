import CountryHandlers from "./interfaces";

import getAll from "./getAll";
import getOne from "./getOne";
import post from "./post";
import put from "./put";
import deleteOne from "./delete";

/**
 * A country (with id for output display)
 * @typedef {object} DisplayCountry
 * @property {string} id.required
 * @property {string} name
 * @property {string} title
 * @property {string} description
 * @property {string} textSeo
 * @property {string} countryCode
 * @property {string} city
 * @property {string} address
 * @property {string} countryPictures
 * @property {string} createdAt
 */

/**
 * A country (for POST body)
 * @typedef {object} PostCountry
 * @property {string} firstname - "Jean-Michel"
 * @property {string} lastname - "O'Connor de la Tour"
 * @property {string} password - "asdfashdyjfsefswefg"
 * @property {string} confirmPassword - "asdfashdyjfsefswefg"
 * @property {string} picture - "https://cdn.fakercloud.com/avatars/m4rio_128.jpg"
 * @property {string} birthDate - "2021-05-17T07:06:24.054Z"
 * @property {string} email - "jmoconnor@ftm.com"
 * @property {string} phoneNumber - "+33601020304"
 * @property {string} addressId -""
 */

/**
 * A country (for PUT body)
 * @typedef {object} UpdateCountry
 * @property {string} firstname - "Jean-Michel"
 * @property {string} lastname - "O'Connor de la Tour"
 * @property {string} password - "asdfashdyjfsefswefg"
 * @property {string} picture - "https://cdn.fakercloud.com/avatars/m4rio_128.jpg"
 * @property {string} birthDate - "2021-05-17T07:06:24.054Z"
 * @property {string} email - "jmoconnor@ftm.com"
 * @property {string} phoneNumber - "+33601020304"
 */

const controllers: CountryHandlers = {
  getAll,
  getOne,
  post,
  put,
  delete: deleteOne,
};

export default controllers;
