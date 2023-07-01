import { Router } from "express";

import commentsRouter from "./comments.routes";

const router = Router();

router.use(commentsRouter);

export default router;