import { Router } from "express";
import bodyValidator from "../../middleware/bodyValidator";
import putCommentSchema from "../../JOI/comments/putCommentSchemaJOI";
import postCommentSchema from "../../JOI/comments/postCommentSchemaJOI";
import controller from "./controller";

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", bodyValidator(postCommentSchema), controller.post);
router.put("/:id", bodyValidator(putCommentSchema), controller.put);
router.delete("/:id", controller.delete);

export default router;
