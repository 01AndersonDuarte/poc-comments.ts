import { db } from "@/database/database.connection";
import { Comment, UpComment } from "../protocols";

export async function getComments() {
    const allComments = await db.query<Comment>("SELECT comment FROM comments;");

    return allComments.rows;
}

export async function upComments(comment: UpComment) {
    return await db.query("UPDATE comments SET comment = $1 WHERE id = $2;", [comment.comment, comment.id]);
}

export async function delComments(id: number) {
    return await db.query("DELETE FROM comments WHERE id = $1;", [id]);
}

export async function postComments(comment: string) {
    await db.query("INSERT INTO comments (comment) VALUES ($1);", [comment]);
}