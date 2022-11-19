import { Request, Response } from "express";
import { CreateUserService } from "../../services/users/createUserService";

export class CreateUserController {
    async handle(request: Request, response: Response) {
        const {name, last_name, email, password} = request.body;
        const service = new CreateUserService();

        const result = await service.execute({name, last_name, email, password});

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.json(result);
    }
}