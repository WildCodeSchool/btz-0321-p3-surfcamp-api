import { Router } from "express";

import users from "./users/routes";
import properties from "./properties/routes";
import address from "./address/routes";

const router = Router();

router.use("/users", users);
router.use("/properties", properties);
router.use("/addresses", address);

export default router;
