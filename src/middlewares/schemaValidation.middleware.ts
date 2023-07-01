import { Request, Response, NextFunction } from "express";
import { Schema } from "joi";

export default function schemaValidation(schema: Schema) {
    return (req: Request, res: Response, next: NextFunction) => {
        res.locals.passwordConfirm = req.body.confirmPassword;
        const validation = schema.validate(req.body, { abortEarly: false });

        if (validation.error) {
            const errors = validation.error.details.map(detail => detail.message);
            return res.status(422).send(errors);
        }
        next();
    }
}