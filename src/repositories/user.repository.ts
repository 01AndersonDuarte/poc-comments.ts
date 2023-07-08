import prisma from "../database/database.connection";

export async function signUp(name: string) {
    const result = await prisma.user.create({
        data: { userName: name }
    });
    return result;
}