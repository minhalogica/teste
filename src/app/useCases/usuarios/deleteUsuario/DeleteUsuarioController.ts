import { Request, Response } from 'express';
import { DeleteUsuarioUseCase } from './DeleteUsuarioUseCase';


/**
 * Controller responsavel apenas para receber requisicao e da resposta
 */


class DeleteUsuarioController {
   
    constructor(private deleteUsuaurioUseCase:DeleteUsuarioUseCase){

    }

    async handle(request:Request, response:Response):Promise<Response>{
        const id = await parseInt(request.params.id);

        const res =  await this.deleteUsuaurioUseCase.execute({id});

        return response.status(201).json(res);
    }

}

export { DeleteUsuarioController }