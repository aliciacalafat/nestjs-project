import { dataToMigrate } from "src/galeria/dto/gallery.dto";
import { Gallery } from "src/galeria/entities/gallery.entity";
import {MigrationInterface, QueryRunner} from "typeorm";

export class GalleryTable1643805774669 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.insert(Gallery, dataToMigrate)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
