import { AppErrors } from "../../../../config/errors/AppErrors";
import { IUsuarioRepositoy } from "../../../repositories/usuarios/IUsuarioRepository";

/**
 * Use Case são serivos independentes e suas regras de negocio na programacao
 *
 */


interface IRequest{
  id:number
}

class DeleteUsuarioUseCase {

    constructor(private usuarioRepository:IUsuarioRepositoy){

    }

   async execute({id}:IRequest):Promise<any>{

           const UsuarioIdExist = await this.usuarioRepository.findById(id);

           
           if(!UsuarioIdExist){
            throw new AppErrors("..........");
            
          }

           this.usuarioRepository.delete(id);
    }

}

export { DeleteUsuarioUseCase }