import { Request, Response } from "express";
import { CreateUserService } from "../services/createUserService";

export class CreateUserController {
    async handle(request: Request, response: Response) {
        const {name, lastName, email} = request.body;
        const service = new CreateUserService();

        const result = await service.execute({name, lastName, email});

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.json(result);
    }
}