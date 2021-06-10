import createUser from "./createUserSeed";
import createProperty from "./createPropertySeed";
import createAddress from "./createAdressSeed";

const seed: any = async () => {
  createProperty(40);
  createUser(40);
  return "40 adresses properties and users was created";
};

export default seed;
