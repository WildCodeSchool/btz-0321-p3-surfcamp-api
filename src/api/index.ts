import { Router } from "express";
import users from "./users/routes";
import properties from "./properties/routes";
import address from "./addresses/routes";
import reservations from "./reservations/routes";
import comments from "./comments/routes";
import rooms from "./rooms/routes";
import propertyPicture from "./propertyPictures/routes";
import feature from "./features/routes";
import country from "./countries/routes";
import city from "./cities/routes";
import countryPicture from "./countryPictures/routes";
import cityPicture from "./cityPictures/routes";
import auth from "./auth/routes";

const router = Router();

router.use("/auth", auth);
router.use("/users", users);
router.use("/properties", properties);
router.use("/addresses", address);
router.use("/reservations", reservations);
router.use("/comments", comments);
router.use("/rooms", rooms);
router.use("/propertypictures", propertyPicture);
router.use("/features", feature);
router.use("/countries", country);
router.use("/cities", city);
router.use("/countrypictures", countryPicture);
router.use("/citypictures", cityPicture);

export default router;
