import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class GalleryTable1643804326847 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'Gallery',
            columns: [ 
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "name",
                    type: "text",
                    isNullable: false
                },
                {
                    name: "price",
                    type: "real",
                    isNullable: false
                },
                {
                    name: "description",
                    type: "text",
                    isNullable: false
                },
                
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Gallery')
    }

}
