import { Router } from "express";
import bodyValidator from "../../middleware/bodyValidator";
import putAddressSchemaJOI from "../../JOI/address/putAddressSchemaJOI";
import postAddressSchemaJOI from "../../JOI/address/postAddressSchemaJOI";
import controller from "./controller";

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", bodyValidator(postAddressSchemaJOI), controller.post);
router.put("/:id", bodyValidator(putAddressSchemaJOI), controller.put);
router.delete("/:id", controller.delete);

export default router;
