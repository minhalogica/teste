import { Usuario } from "../../entities/Usuario";


/**
 * Interface dos metodos e atributos usados no repository 
 */


interface IUsuarioRepositoyDTO{
    name:string,
    senha:string,
    email:string
}

interface IUsuarioRepositoy {
     list():Promise<Usuario[]>;
     create({name, email, senha}:IUsuarioRepositoyDTO):Promise<void>;
     update(name:number):Promise<void>;
     delete(id:number):Promise<void>;
     findByName(name:string):Promise<Usuario>;
     findByNameAndEmail(email, name):Promise<Usuario>;
     findById(id:number):Promise<Usuario>;
     findByEmail(email:string):Promise<Usuario>;
}

export { IUsuarioRepositoy, IUsuarioRepositoyDTO }