import { getRepository, Repository } from "typeorm";
import { Usuario } from "../../../entities/Usuario";
import { IUsuarioRepositoy, IUsuarioRepositoyDTO } from "../IUsuarioRepository";


/**
 * Repository usado para comunicar com banco de dados -> entities
 * Para cada acão independente existe uma repositorio exemplo: usuario, perfil, noticias...
 */

class UsuarioRepository implements IUsuarioRepositoy {
    
    private usuario:Repository<Usuario>;

    constructor(){
        this.usuario = getRepository(Usuario);
    }
  
  
   async findByEmail(email: string): Promise<Usuario> {
      const usuario = await this.usuario.findOne({email});
      return usuario;
   }
 
 
    async findByNameAndEmail(email:string, name:string): Promise<Usuario> {
      const usuario = await this.usuario.findOne({name, email})
      return usuario;
   }
    
    async findById(id: number): Promise<Usuario> {
      const usuario = await this.usuario.findOne({id});
      return usuario; 
    }

    async list(): Promise<Usuario[]> {
        return await this.usuario.find()
    }


    async create({ name, email, senha }: IUsuarioRepositoyDTO): Promise<void> {
       
       const usuario = await this.usuario.create({
                      name,
                      email,
                      senha
                    });

        this.usuario.save(usuario);

    }


    async update( id:number ): Promise<void> {
        await this.usuario.update(id, {name:"usuario 3333"});
    }


    async delete(id: number): Promise<void> {
      await this.usuario.delete(id);
    }


    async findByName(name: string): Promise<Usuario> {
       const usuario = await this.usuario.findOne({name})
       return usuario;
    }


}

export { UsuarioRepository }