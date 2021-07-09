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
