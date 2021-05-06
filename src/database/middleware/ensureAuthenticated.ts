import { NextFunction, Request , Response } from 'express';
import { verify } from 'jsonwebtoken'
import { UsuarioRepository } from '../../app/repositories/usuarios/implements/UsuarioRepository';
import { AppErrors } from '../../config/errors/AppErrors';

interface IPayload {
    id: number
}

export async function ensureAuthenticated(request:Request, response:Response, next: NextFunction) {
    
    /// Bearer "token"

    const authHeader = await request.headers.authorization;


    if(!authHeader){
        throw new AppErrors("Token invalido", 401);
    }

    const [, token] = await authHeader.split(" ");
    try{
     const { id }  = await verify(token, "298abd70a6a9e6e419c4de98582c306c") as IPayload;
     const usuarioRepository = new UsuarioRepository();
     const user = await usuarioRepository.findById(id);

     if(!user){
         throw new AppErrors("Usuário não existe", 401);
     }
    
     next();
    }catch{
        throw new AppErrors("Invalido Token!", 401);
        
    }


}