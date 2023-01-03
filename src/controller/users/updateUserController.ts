import { Request, response, Response } from "express";
import { UpdateUserService } from "../../services/users/updateUserService";

export class UpdateUserController {
    async updateUser (req: Request, res: Response) {
        const idUser = req?.params?.id;
        let {id, name, last_name, email, password} = req.body;
        const service = new UpdateUserService;

        id = idUser;

        if (!idUser) {
            return res.status(400).json('User not found!')
        }

        const result = await service.execute({id, name, last_name, email, password});

        return res.json(result);
        
    }
}