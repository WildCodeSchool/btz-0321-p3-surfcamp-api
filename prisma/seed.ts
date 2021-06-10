import createUser from "./createUserSeed";
import createProperty from "./createPropertySeed";
import createAddress from "./createAdressSeed";

const seed: any = async () => {
  createProperty(40);
  createAddress(40);
  createUser(40);
  return "ok seed";
};

export default seed;
