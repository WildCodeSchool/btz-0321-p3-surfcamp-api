import { Router } from "express";
import putSchemaValidator from "../../middleware/putSchemaValidator";
import postCommentSchema from "../../JOI/comments/postCommentSchemaJOI";
import postSchemaValidator from "../../middleware/postSchemaValidator";
import putCommentSchema from "../../JOI/comments/putCommentSchemaJOI";
import controller from "./controller";

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", postSchemaValidator(postCommentSchema), controller.post);
router.put("/:id", putSchemaValidator(putCommentSchema), controller.put);
router.delete("/:id", controller.delete);

export default router;
