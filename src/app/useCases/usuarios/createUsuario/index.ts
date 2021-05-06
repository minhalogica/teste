import { UsuarioRepository } from "../../../repositories/usuarios/implements/UsuarioRepository";
import { CreateUsuarioController } from "./CreateUsuarioController";
import { CreateUsuarioUseCase } from "./CreateUsuarioUseCase";



/**
 * Injeção de dependencias modo manual
 * Onde Repositorio->UseCase->Controller
 */

export default ():CreateUsuarioController => {

const usuarioRepository = new UsuarioRepository();
const createUsuarioUseCase = new CreateUsuarioUseCase(usuarioRepository);
const createUsuarioController = new CreateUsuarioController(createUsuarioUseCase);

return createUsuarioController 

}

