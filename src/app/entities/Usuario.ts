import { Column, CreateDateColumn, Entity, Generated, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

/**
 * Estrutura da tabela do banco de dados
 */

@Entity('usuarios')
class Usuario {

  @PrimaryGeneratedColumn('increment')
  id:number;
 
  @Column()
  name:string;

  @Column()
  email:string

  @Column()
  senha:string
 
  @CreateDateColumn()
  createAt:Date;
  
  @UpdateDateColumn()
  updateAt:Date;

}


export { Usuario }