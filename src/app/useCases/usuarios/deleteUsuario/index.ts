import { UsuarioRepository } from "../../../repositories/usuarios/implements/UsuarioRepository";
import { DeleteUsuarioController } from "./DeleteUsuarioController";
import { DeleteUsuarioUseCase } from "./DeleteUsuarioUseCase";


/**
 * Injeção de dependencias modo manual
 * Onde Repositorio->UseCase->Controller
 */

export default ():DeleteUsuarioController => {

const usuarioRepository = new UsuarioRepository();
const deleteUsuarioUseCase = new DeleteUsuarioUseCase(usuarioRepository);
const deleteUsuarioController = new DeleteUsuarioController(deleteUsuarioUseCase);

return deleteUsuarioController 

}

