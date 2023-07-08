import prisma from "@/database/database.connection";
import { Comment, UpComment } from "../protocols";

export async function getComments() {
    const allComments = await prisma.comment.findMany({
        select: {
            comment: true,
            user: {
                select: {
                    userName: true
                }
            }
        }
    });

    return allComments;
}

export async function getComment(id: number) {
    const comment = await prisma.comment.findFirst({
        where: { id }
    });

    return comment;
}

export async function getUser(id: number) {
    const user = await prisma.user.findFirst({
        where: { id }
    });

    return user;
}

export async function upComments(comment: UpComment) {
    return await prisma.comment.update({
        where: {
            id: comment.idComment
        },
        data: {
            comment: comment.comment,
            userId: comment.idAuthor
        }
    });
}

export async function delComments(id: number) {
    return await prisma.comment.delete({
        where: { id }
    });
}

export async function postComments(comment: Comment) {
    await prisma.comment.create({
        data: {
            userId: comment.idAuthor,
            comment: comment.comment
        }
    });
}