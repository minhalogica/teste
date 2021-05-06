import { IUsuarioRepositoy } from "../../../repositories/usuarios/IUsuarioRepository";

/**
 * Use Case são serivos independentes e suas regras de negocio na programacao
 *
 */

import { hash } from 'bcrypt';
import { AppErrors } from "../../../../config/errors/AppErrors";

interface IRequest {
   name:string,
   email:string,
   senha:string
} 

class CreateUsuarioUseCase {

    constructor(private usuarioRepository:IUsuarioRepositoy){

    }

    async execute({name, email, senha}:IRequest):Promise<void>{

        const existUsuario = await this.usuarioRepository.findByNameAndEmail(name, email);
        
        if(existUsuario){
            throw new AppErrors("Usuario ou E-mail já cadastrado");
        }

        const pass = await hash(senha, 8);

        this.usuarioRepository.create({name, email, senha:pass});

    }

}

export { CreateUsuarioUseCase }