import Joi from "joi";
import { Comment } from "@/protocols";

export const commentValidate = Joi.object<Comment>({
    comment: Joi.string().max(200).required(),
});