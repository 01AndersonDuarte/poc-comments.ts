import { Request, Response } from "express";
import * as userService from "@/service/user.service";
import { UserName } from "../protocols";

export async function signUp(req: Request, res: Response){
    const name = req.body as UserName;

    await userService.signUp(name.userName);

    res.sendStatus(200);
}