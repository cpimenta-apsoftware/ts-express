import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class criarPessoas1602786442280 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {    
    await queryRunner.createTable(new Table({
      name: 'pessoas',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'nome',
          type: 'varchar'
        },
        {
          name: 'email',
          type: 'varchar'
        }
      ]      
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {    
    await queryRunner.dropTable('pessoas');
  }

}