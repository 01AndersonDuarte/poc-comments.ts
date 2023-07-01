import { Request, Response, NextFunction } from "express";
import { ErrorDev } from "@/protocols"
import httpStatus from "http-status";

export default function errorHandlingMiddleware(error: ErrorDev, req: Request, res: Response, next: NextFunction) {
	if (error.type === "NotFoundError") return res.status(httpStatus.NOT_FOUND).send(`${error.message}`);

	return res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Erro no servidor");
}