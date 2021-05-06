import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsuarios1619809276123 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
               {
                name: "usuarios",
                columns:[
                    {
                        name:"id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name:"name",
                        type:"varchar",
                    },
                    {
                        name:"email",
                        type:"varchar"
                    },
                    {
                        name:"senha",
                        type:"varchar"
                    },
                    {
                        name:"createAt",
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name:"updateAt",
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
               }
            )
            , true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('usuarios');
    }

}
