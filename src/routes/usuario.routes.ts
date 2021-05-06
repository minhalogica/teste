import { Router } from 'express';
import { ensureAuthenticated } from '../database/middleware/ensureAuthenticated';
import  createUsuarioController  from '../app/useCases/usuarios/createUsuario';
import  deleteUsuarioController  from '../app/useCases/usuarios/deleteUsuario';
import  listUsuarioController  from '../app/useCases/usuarios/listUsuario';
import  updateUsuarioController  from '../app/useCases/usuarios/updateUsuario';


const usuarioRoutes = Router();

usuarioRoutes.use(ensureAuthenticated);

usuarioRoutes.get("/", (request, response) => {
    return listUsuarioController().handle(request, response);
})

usuarioRoutes.post("/create", (request,response)=>{
    return createUsuarioController().handle(request, response);
})

usuarioRoutes.put("/update/:id", (request, response)=>{
    return updateUsuarioController().handle(request, response);
})

usuarioRoutes.delete("/delete/:id", (request, response)=>{
    return deleteUsuarioController().handle(request, response);
})


export { usuarioRoutes }