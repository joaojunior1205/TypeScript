import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTableValues1668520561919 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'values',
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "value",
                        type: "varchar",
                    },
                    {
                        name: "type_value",
                        type: "int",
                    },
                    {
                        name: "user_id",
                        type: "uuid"
                    }
                    
                ],
                foreignKeys: [
                    {
                        name: "fk_user_id",
                        columnNames: ["user_id"],
                        referencedTableName: "user",
                        referencedColumnNames: ["id"],
                    }
                ]
            })
        )
    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("values");
    }

}
