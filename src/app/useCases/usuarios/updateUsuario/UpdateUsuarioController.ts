import { Response, Request } from 'express';
import { UpdateUsuarioUseCase } from "./UpdateUsuarioUseCase";



class UpdateUsuarioController {

    constructor(private updateUsuarioUseCase:UpdateUsuarioUseCase){

    }

    handle(request:Request, response:Response):Response{
        let id = parseInt(request.params.id); 

     
        this.updateUsuarioUseCase.execute({id});
        return response.status(201).send();
    }

}

export { UpdateUsuarioController }