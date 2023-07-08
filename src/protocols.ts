import { User } from "@prisma/client";

export type UpComment = { idComment: number, idAuthor: number, comment: string };

export type DelComment = Omit<UpComment, "comment">;

export type Comment = Omit<UpComment, "idComment">;

export type ErrorDev = { type: string, message: string};

export type UserName = Omit<User, "id">;