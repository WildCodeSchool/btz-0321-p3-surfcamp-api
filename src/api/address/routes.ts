import { Router } from "express";
import putSchemaValidator from "../../middleware/putSchemaValidator";
import postSchemaValidator from "../../middleware/postSchemaValidator";
import putAddressSchemaJOI from "../../JOI/address/putPropertySchemaJOI";
import postAddressSchemaJOI from "../../JOI/address/postPropertySchemaJOI";
import controller from "./controller";

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", postSchemaValidator(postAddressSchemaJOI), controller.post);
router.put("/:id", putSchemaValidator(putAddressSchemaJOI), controller.put);
router.delete("/:id", controller.delete);

export default router;
