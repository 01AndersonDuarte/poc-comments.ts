import { Request, Response } from "express";
import * as commentsService from "@/service/comments.service";
import { Comment, UpComment, DelComment } from "../protocols";
import httpStatus from "http-status";

export async function getComments(req: Request, res: Response) {
    const allComments = await commentsService.getComments();
    res.status(httpStatus.OK).send(allComments);
}

export async function upComments(req: Request, res: Response) {
    const comment = req.body as UpComment;

    await commentsService.upComments(comment);

    res.status(httpStatus.OK).send("Comentário alterado.");
}

export async function delComments(req: Request, res: Response) {
    const comment = req.body as DelComment;

    await commentsService.delComments(comment);

    res.status(httpStatus.OK).send("Comentário apagado com sucesso.");
}

export async function postComments(req: Request, res: Response) {
    const comment = req.body as Comment;

    await commentsService.postComments(comment);
    res.status(201).send("Sucesso!");
}