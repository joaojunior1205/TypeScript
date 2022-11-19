import { Request, Response } from "express";
import { GetAllUserService, GetUserService } from "../../services/users/getUserService";

export class GetAllUserController {
    async getAll (req: Request, res: Response) {
        const service = new GetAllUserService;

        const reqResult = await service.execute();

        return res.json(reqResult);
    }
}

export class GetUserController {
    async get (req: Request, res: Response) {
        const id = req?.params?.id;
        const service = new GetUserService;

        if (!id) {
            return res.status(400).json('Id invalid!')
        }

        const reqResult = await service.execute(id);

        return res.json(reqResult)
    }
}