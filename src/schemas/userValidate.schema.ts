import Joi, { object } from "joi";
import { UserName } from "../protocols";

export const userValidate = Joi.object<UserName>({
    userName: Joi.string().max(20).required()
});