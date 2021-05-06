import { UsuarioRepository } from "../../../repositories/usuarios/implements/UsuarioRepository";
import { UpdateUsuarioController } from "./UpdateUsuarioController";
import { UpdateUsuarioUseCase } from "./UpdateUsuarioUseCase";


export default(): UpdateUsuarioController => {

const usuarioRepository = new UsuarioRepository();
const updateUsuarioUseCase = new UpdateUsuarioUseCase(usuarioRepository);
const updateUsuarioController = new UpdateUsuarioController(updateUsuarioUseCase);

return updateUsuarioController

}

