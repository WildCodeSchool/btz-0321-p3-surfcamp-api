import { Router } from "express";
import postUserSchema from "../../JOI/users/postUserSchemaJOI";
import controller from "./controller";
import putUserSchema from "../../JOI/users/putUserSchemaJOI";
import bodyValidator from "../../middleware/bodyValidator";
import checkToken from "../../middleware/checkToken";
import checkRole from "../../middleware/checkRole";
const router = Router();

router.get("/", checkToken, checkRole, controller.getAll);
router.get("/:id", checkToken, controller.getOne);
router.post(
  "/",
  checkToken,
  checkRole,
  bodyValidator(postUserSchema),
  controller.post
);
router.put("/:id", checkToken, bodyValidator(putUserSchema), controller.put);
router.delete("/:id", checkToken, checkRole, controller.delete);

export default router;
