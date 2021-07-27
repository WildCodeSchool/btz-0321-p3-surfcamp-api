import FeatureHandlers from "./interfaces";

import getAll from "./getAll";
import getOne from "./getOne";
import post from "./post";
import put from "./put";
import deleteOne from "./delete";

/**
 * A feature (with id for output display)
 * @typedef {object} DisplayFeature
 * @property {string} id
 * @property {string} label
 * @property {string} property
 * @property {string} propertyId
 * @property {string} iconUrl
 * @property {string} createdAt

 */

/**
 * a feature (for Post body)
 * @typedef {object} PostFeature
 * @property {string} label
 * @property {string} propertyId
 * @property {string} iconUrl

 */

/**
 * a feature (for PUT body)
 * @typedef {object} UpdateFeature
 * @property {string} label
 * @property {string} propertyId
 * @property {string} iconUrl
 */

const controllers: FeatureHandlers = {
  getAll,
  getOne,
  post,
  put,
  delete: deleteOne,
};

export default controllers;
