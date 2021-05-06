import { UsuarioRepository } from "../../../repositories/usuarios/implements/UsuarioRepository";
import { AuthUserConstoller } from "./AuthUserController";
import { AuthUserUseCase } from "./AuthUserUseCase";



/**
 * Injeção de dependencias modo manual
 * Onde Repositorio->UseCase->Controller
 */

export default ():AuthUserConstoller => {

const usuarioRepository = new UsuarioRepository();
const authUsuarioUseCase = new AuthUserUseCase(usuarioRepository);
const authUsuarioController = new AuthUserConstoller(authUsuarioUseCase);

return authUsuarioController 

}

