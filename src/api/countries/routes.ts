import { Router } from "express";
import controller from "./controller";
import bodyValidator from "../../middleware/bodyValidator";
import postCountrySchema from "../../JOI/country/postCountrySchemaJOI";
import putCountrySchema from "../../JOI/country/putCountrySchemaJOI";
import checkRole from "../../middleware/checkRole";
import checkToken from "../../middleware/checkToken";
const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post(
  "/",
  checkToken,
  checkRole,
  bodyValidator(postCountrySchema),
  controller.post
);
router.put(
  "/:id",
  checkToken,
  checkRole,
  bodyValidator(putCountrySchema),
  controller.put
);
router.delete("/:id", checkToken, checkRole, controller.delete);

export default router;
