import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPaylod {
    sub: string;
}

export async function ensureAuthenticate (request: Request, response: Response, next: NextFunction): Promise<void> {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new Error("Token missing");
    }

    const [, token] = authHeader.split(" ");


    try {
        const { sub: user_id } = verify(token, "0af5d8a084b741846790efdeaa838dd2") as IPaylod;

        const usersRepository = new UsersRepository();

        const user = await usersRepository.findById(user_id);

        if (!user) {
            throw new Error("Invalid token!");
        }

        request.user = {
            id: user_id
        }

        next();
    } catch (error) {
        throw new Error("Invalid token!");
    }
}