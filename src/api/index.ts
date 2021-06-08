import { Router } from "express";

import users from "./users/routes";
import properties from "./properties/routes";

const router = Router();

router.use("/users", users);
router.use("/properties", properties);

export default router;
