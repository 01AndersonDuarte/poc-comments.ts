import { Router } from "express";
import * as commentsController from "@/controllers/comments.controller";
import schemaValidation from "@/middlewares/schemaValidation.middleware";
import { commentDelValidate, commentUpValidate, commentValidate } from "@/schemas/commentValidate.schema";

const commentsRouter = Router();

commentsRouter.get("/get-comments", commentsController.getComments);
commentsRouter.put("/up-comments", schemaValidation(commentUpValidate), commentsController.upComments);
commentsRouter.delete("/del-comments", schemaValidation(commentDelValidate), commentsController.delComments);
commentsRouter.post("/post-comments", schemaValidation(commentValidate), commentsController.postComments);

export default commentsRouter;