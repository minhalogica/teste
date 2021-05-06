import { Router } from 'express';
import  authUsuarioController  from '../app/useCases/usuarios/authUser';

const authRoutes = Router();



authRoutes.post("/", (request,response)=>{
    return authUsuarioController().handle(request, response);
})



export { authRoutes }