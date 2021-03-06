import { Router } from "express";
import bodyValidator from "../../middleware/bodyValidator";
import putPropertySchema from "../../JOI/property/putPropertySchemaJOI";
import postPropertySchema from "../../JOI/property/postPropertySchemaJOI";
import controller from "./controller";
import checkToken from "../../middleware/checkToken";
import checkRole from "../../middleware/checkRole";
const router = Router();

router.get("/", controller.getAll);
router.get("/search", controller.search);
router.get("/:id", controller.getOne);
router.get("/:id/features", controller.getFeatures);
router.get("/:id/comments", controller.getComments);
router.get("/:id/addresses", controller.getAddresses);
router.get("/:id/city", controller.getCity);
router.get("/:id/country", controller.getCountry);
router.post(
  "/",
  checkToken,
  bodyValidator(postPropertySchema),
  controller.post
);
router.put(
  "/:id",
  checkToken,
  bodyValidator(putPropertySchema),
  controller.put
);
router.delete("/:id", checkToken, checkRole, controller.delete);

export default router;
