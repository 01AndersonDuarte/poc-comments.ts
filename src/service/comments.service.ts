import * as commentsRepository from "@/repositories/comments.repository";
import { Comment, DelComment, UpComment } from "../protocols";
import { notFoundError, unauthorizedError } from "../errors/errors";

export async function getComments() {
    const allComments = await commentsRepository.getComments();

    return allComments;
}

export async function getComment(idComment: number, idAuthor: number){
    const result  = await commentsRepository.getComment(idComment);

    if (!result) throw notFoundError(`O comentário de id ${idComment}`);
    if(result.userId!==idAuthor) throw unauthorizedError();

    return result;
}
export async function getUser(idUser: number){
    const result = await commentsRepository.getUser(idUser);
    if(!result) throw unauthorizedError(`O usuário de id ${idUser} não existe`);
}

export async function upComments(comment: UpComment) {
    await getComment(comment.idComment, comment.idAuthor);
    await commentsRepository.upComments(comment);
}

export async function delComments(comment: DelComment) {
    await getComment(comment.idComment, comment.idAuthor);
    await commentsRepository.delComments(comment.idComment);
}

export async function postComments(comment: Comment) {
    await getUser(comment.idAuthor);
    await commentsRepository.postComments(comment);
}