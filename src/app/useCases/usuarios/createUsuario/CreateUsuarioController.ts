import { Response, Request } from 'express';
import { CreateUsuarioUseCase } from "./CreateUsuarioUseCase";

/**
 * Controller responsavel apenas para receber requisicao e da resposta
 */


class CreateUsuarioController {

    constructor(private createUsuarioUseCase:CreateUsuarioUseCase){

    }

    async handle(request: Request, response: Response):Promise<Response>{
        const { name, email, senha } = await request.body;

        await this.createUsuarioUseCase.execute({name, email, senha});

         return response.status(201).send();
    }

}

export { CreateUsuarioController }