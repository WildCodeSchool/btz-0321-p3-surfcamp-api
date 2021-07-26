import { Router } from "express";
import controller from "./controller";
import bodyValidator from "../../middleware/bodyValidator";
import postCitySchema from "../../JOI/city/postCitySchemaJOI";
import putCitySchema from "../../JOI/city/putCitySchemaJOI";
import checkToken from "../../middleware/checkToken";
import checkRole from "../../middleware/checkRole";
const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.get(
  "/:id/citypictures",
  checkToken,
  checkRole,
  controller.getCityPictures
);
router.post(
  "/",
  bodyValidator(postCitySchema),
  checkToken,
  checkRole,
  controller.post
);
router.put(
  "/:id",
  bodyValidator(putCitySchema),
  checkToken,
  checkRole,
  controller.put
);
router.delete("/:id", checkToken, checkRole, controller.delete);

export default router;
