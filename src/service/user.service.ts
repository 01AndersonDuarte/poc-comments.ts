import { User } from "@prisma/client";
import { conflitError } from "../errors/errors";
import * as userRepository from "@/repositories/user.repository";

export async function signUp(userName: string){
    let result: User;
    try{
        result = await userRepository.signUp(userName);
    }catch(error){
        if(!result) throw conflitError(`O usuário ${userName} já está cadastrado`);
    }
}