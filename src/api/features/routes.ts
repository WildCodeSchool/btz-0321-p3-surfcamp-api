import { Router } from "express";
import controller from "./controller";

import bodyValidator from "../../middleware/bodyValidator";
import checkRole from "../../middleware/checkRole";
import checkToken from "../../middleware/checkToken";
import postFeatureSchemaJOI from "../../JOI/feature/postFeatureSchemaJOI";
import putFeatureSchemaJOI from "../../JOI/feature/putFeatureSchemaJOI";
const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post(
  "/",
  checkToken,
  bodyValidator(postFeatureSchemaJOI),
  controller.post
);
router.put(
  "/:id",
  checkToken,
  checkRole,
  bodyValidator(putFeatureSchemaJOI),
  controller.put
);
router.delete("/:id", checkToken, checkRole, controller.delete);

export default router;
