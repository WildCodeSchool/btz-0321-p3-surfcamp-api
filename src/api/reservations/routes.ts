import { Router } from "express";
import postReservationSchema from "../../JOI/reservation/postReservationSchemaJOI";
import putReservationSchema from "../../JOI/reservation/putReservationSchemaJOI";
import bodyValidator from "../../middleware/bodyValidator";

import controller from "./controller";

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", bodyValidator(postReservationSchema), controller.post);
router.put("/:id", bodyValidator(putReservationSchema), controller.put);
router.delete("/:id", controller.delete);

export default router;
