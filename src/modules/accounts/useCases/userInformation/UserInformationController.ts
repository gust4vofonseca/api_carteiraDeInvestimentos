import { Request, Response} from 'express';
import { container } from 'tsyringe';
import { UserInformationUseCase } from './UserInformationUseCase';

class UserInformationController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.user;

        const userInformationUseCase = container.resolve(UserInformationUseCase);

        const user = await userInformationUseCase.execute(id);

        return response.json(user);
    }
}

export { UserInformationController }