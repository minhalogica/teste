import { Usuario } from "../../../entities/Usuario";
import { IUsuarioRepositoy } from "../../../repositories/usuarios/IUsuarioRepository";


/**
 * Use Case são serivos independentes e suas regras de negocio na programacao
 *
 */


class ListUsuarioUseCase {

    constructor(private usuarioRepository:IUsuarioRepositoy){

    }

    async execute():Promise<Usuario[]> {
        const usuarios = await this.usuarioRepository.list();
        return usuarios;
    }

}

export { ListUsuarioUseCase }