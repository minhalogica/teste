import { IUsuarioRepositoy } from "../../../repositories/usuarios/IUsuarioRepository";

interface IRequest {
    id:number
}

class UpdateUsuarioUseCase {

    constructor(private usuarioRepository:IUsuarioRepositoy){

    }

    execute({id}:IRequest){
           this.usuarioRepository.update(id)
    }

}

export { UpdateUsuarioUseCase }