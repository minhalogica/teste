import { Request, Response } from 'express';
import { ListUsuarioUseCase } from "./ListUsuarioUserCase";


/**
 * Controller responsavel apenas para receber requisicao e da resposta
 */


class ListUsuarioController {

    constructor(private listUsuarioUseCase:ListUsuarioUseCase){

    }

     async handle(request:Request, response:Response): Promise<Response>{
        const all = await this.listUsuarioUseCase.execute();
        return response.status(201).json(all);
    }

}

export { ListUsuarioController }