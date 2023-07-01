import * as commentsRepository from "@/repositories/comments.repository";
import { UpComment } from "../protocols";
import { notFoundError } from "../errors/errors";

export async function getComments() {
    const allComments = await commentsRepository.getComments();

    return allComments;
}

export async function upComments(comment: UpComment) {
    const result = await commentsRepository.upComments(comment);

    if (result.rowCount === 0) throw notFoundError(`O comentário de id ${comment.id}`);
}

export async function delComments(id: number) {
    const result = await commentsRepository.delComments(id);

    if (result.rowCount === 0) throw notFoundError(`O comentário de id ${id}`);
}

export async function postComments(comment: string) {
    await commentsRepository.postComments(comment);
}