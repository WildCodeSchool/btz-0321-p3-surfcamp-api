import { Router } from "express";
import putSchemaValidator from "../../middleware/putSchemaValidator";
import postSchemaValidator from "../../middleware/postSchemaValidator";
import putPropertySchema from "../../JOI/property/putPropertySchemaJOI";
import postPropertySchema from "../../JOI/property/postPropertySchemaJOI";
import controller from "./controller";

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", postSchemaValidator(postPropertySchema), controller.post);
router.put("/:id", putSchemaValidator(putPropertySchema), controller.put);
router.delete("/:id", controller.delete);

export default router;
