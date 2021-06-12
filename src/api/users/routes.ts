import { Router } from "express";
import postUserSchema from "../../JOI/users/postUserSchemaJOI";
import controller from "./controller";
import putUserSchema from "../../JOI/users/putUserSchemaJOI";
import putSchemaValidator from "../../middleware/putSchemaValidator";
import postSchemaValidator from "../../middleware/postSchemaValidator";
import app from "../../app";
import errorHandler from "../../middleware/errorHandler";

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", postSchemaValidator(postUserSchema), controller.post);
router.put("/:id", putSchemaValidator(putUserSchema), controller.put);
router.delete("/:id", controller.delete);

export default router;
