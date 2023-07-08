import Joi from "joi";
import { Comment, DelComment, UpComment } from "@/protocols";

export const commentValidate = Joi.object<Comment>({
    idAuthor: Joi.number().integer().required(),
    comment: Joi.string().max(200).required()
});

export const commentUpValidate = Joi.object<UpComment>({
    idComment: Joi.number().integer().required(),
    idAuthor: Joi.number().integer().required(),
    comment: Joi.string().max(200).required()
});

export const commentDelValidate = Joi.object<DelComment>({
    idComment: Joi.number().integer().required(),
    idAuthor: Joi.number().integer().required()
});