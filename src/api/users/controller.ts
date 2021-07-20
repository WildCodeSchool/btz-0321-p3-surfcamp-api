import UserHandlers from "./interfaces";

import getAll from "./getAll";
import getOne from "./getOne";
import post from "./post";
import put from "./put";
import deleteOne from "./delete";

/**
 * A user (with id for output display)
 * @typedef {object} DisplayUser
 * @property {string} id.required - "1"
 * @property {string} firstname - "Jean-Michel"
 * @property {string} lastname - "O'Connor de la Tour"
 * @property {string} picture - "https://cdn.fakercloud.com/avatars/m4rio_128.jpg"
 * @property {string} birthDate - "2021-05-17T07:06:24.054Z"
 * @property {string} email - "jmoconnor@ftm.com"
 * @property {string} role - "USER"
 * @property {string} phoneNumber - "+33601020304"
 * @property {string} createdAt - ""
 */

/**
 * A user (for POST body)
 * @typedef {object} CreateUser
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
 * A user (for PUT body)
 * @typedef {object} UpdateUser
 * @property {string} firstname - "Jean-Michel"
 * @property {string} lastname - "O'Connor de la Tour"
 * @property {string} password - "asdfashdyjfsefswefg"
 * @property {string} picture - "https://cdn.fakercloud.com/avatars/m4rio_128.jpg"
 * @property {string} birthDate - "2021-05-17T07:06:24.054Z"
 * @property {string} email - "jmoconnor@ftm.com"
 * @property {string} phoneNumber - "+33601020304"
 */

const controllers: UserHandlers = {
  getAll,
  getOne,
  post,
  put,
  delete: deleteOne,
};

export default controllers;
