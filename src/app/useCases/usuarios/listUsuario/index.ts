import { UsuarioRepository } from "../../../repositories/usuarios/implements/UsuarioRepository";
import { ListUsuarioController } from "./ListUsuarioController";
import { ListUsuarioUseCase } from "./ListUsuarioUserCase";


/**
 * Injeção de dependencias modo manual
 * Onde Repositorio->UseCase->Controller
 */


export default ():ListUsuarioController =>{

    const usuarioRepository = new UsuarioRepository();
const listUsuarioUseCase = new ListUsuarioUseCase(usuarioRepository);
const listUsuarioController = new ListUsuarioController(listUsuarioUseCase);

return listUsuarioController 

}

