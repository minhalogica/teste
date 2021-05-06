import { Request, Response } from 'express';
import { AuthUserUseCase } from './AuthUserUseCase';

/**
 * Controller responsavel apenas para receber requisicao e da resposta
 */

class AuthUserConstoller {

    constructor(private authUserUserCase:AuthUserUseCase){

    }

    async handle(request:Request, response:Response): Promise<Response>{
     const { email, senha } = request.body;

     const dadosAuth =   await  this.authUserUserCase.execute({email, senha});
   
     return response.status(201).json(dadosAuth);
   
    }

}

export { AuthUserConstoller }