import { Router } from "express";

import users from "./users/routes";
import properties from "./properties/routes";
import address from "./address/routes";
import reservations from "./reservations/routes";
import comments from "./comments/routes";

const router = Router();

router.use("/users", users);
router.use("/properties", properties);
router.use("/addresses", address);
router.use("/reservations", reservations);
router.use("/comments", comments);

export default router;
