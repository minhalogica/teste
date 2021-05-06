import { UsuarioRepository } from "../../../repositories/usuarios/implements/UsuarioRepository";


/**
 * Use Case são serivos independentes e suas regras de negocio na programacao
 * Esse Use Case é de authenticacao - use case mais especifico
 */

import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { AppErrors } from "../../../../config/errors/AppErrors";

interface IRequest {
    email:string;
    senha:string;
}

interface IResponse {
    id:number;
    email:string;
    token:string;
}

class AuthUserUseCase {

    constructor(private usuarioRepository:UsuarioRepository){

    }

     async execute({email,senha}:IRequest): Promise<IResponse>{
         // Usuario existe

         const usuario = await this.usuarioRepository.findByEmail(email)

         if(!usuario){
             throw new AppErrors("Usuario Ou Senha não existe");
         }

          // Senha esta correta

         const passCompare = compare(senha, usuario.email);

         if(!passCompare){
            throw new AppErrors("Usuario Ou Senha não existe");
         } 

         // gerar jwt

        let id = usuario.id;

        const token = sign( { id } , process.env.APP_KEY,{
          expiresIn:process.env.APP_EXPIRATION
        });

        return {
            id,
            email,
            token
        }

    }

}

export { AuthUserUseCase }