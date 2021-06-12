import { Router } from "express";
import postReservationSchema from "../../JOI/reservation/postReservationSchemaJOI";
import putReservationSchema from "../../JOI/reservation/putReservationSchemaJOI";
import postSchemaValidator from "../../middleware/postSchemaValidator";
import putSchemaValidator from "../../middleware/putSchemaValidator";

import controller from "./controller";

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", postSchemaValidator(postReservationSchema), controller.post);
router.put("/:id", putSchemaValidator(putReservationSchema), controller.put);
router.delete("/:id", controller.delete);

export default router;
