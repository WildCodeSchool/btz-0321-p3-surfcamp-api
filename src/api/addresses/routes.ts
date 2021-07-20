import { Router } from "express";
import bodyValidator from "../../middleware/bodyValidator";
import putAddressSchemaJOI from "../../JOI/address/putAddressSchemaJOI";
import postAddressSchemaJOI from "../../JOI/address/postAddressSchemaJOI";
import controller from "./controller";
import checkToken from "../../middleware/checkToken";
import checkRole from "../../middleware/checkRole";

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post(
  "/",
  checkToken,
  bodyValidator(postAddressSchemaJOI),
  controller.post
);
router.put("/:id", bodyValidator(putAddressSchemaJOI), controller.put);
router.delete("/:id", checkToken, checkRole, controller.delete);

export default router;
