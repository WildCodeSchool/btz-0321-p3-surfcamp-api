import { Router } from "express";
import postSchemaValidator from "../../middleware/postSchemaValidator";
import putSchemaValidator from "../../middleware/putSchemaValidator";
import postUserSchema from "../../JOI/users/postUserSchemaJOI";
import controller from "./controller";
import putUserSchema from "../../JOI/users/putUserSchemaJOI";

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", postSchemaValidator(postUserSchema), controller.post);
router.put("/:id", putSchemaValidator(putUserSchema), controller.put);
router.delete("/:id", controller.delete);

export default router;
