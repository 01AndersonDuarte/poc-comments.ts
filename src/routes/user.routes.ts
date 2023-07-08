import { Router } from "express";

import * as userController from "@/controllers/user.controller";
import schemaValidation from "../middlewares/schemaValidation.middleware";
import { userValidate } from "../schemas/userValidate.schema";

const userRouter = Router();

userRouter.post("/sign-up", schemaValidation(userValidate), userController.signUp);

export default userRouter;