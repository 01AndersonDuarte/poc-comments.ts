import { Router } from "express";

import commentsRouter from "./comments.routes";
import userRouter from "./user.routes";

const router = Router();

router.use(commentsRouter);
router.use(userRouter);

export default router;