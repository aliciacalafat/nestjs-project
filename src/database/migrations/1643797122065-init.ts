import {MigrationInterface, QueryRunner} from "typeorm";

export class init1643797122065 implements MigrationInterface {
    name = 'init1643797122065'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "gallery" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "price" integer NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_65d7a1ef91ddafb3e7071b188a0" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "gallery"`);
    }

}
