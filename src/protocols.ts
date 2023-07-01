export type UpComment = { id: number, comment: string };

export type Comment = Omit<UpComment, "id">;

export type ErrorDev = { type: string, message: string};