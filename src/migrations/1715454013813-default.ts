import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1715454013813 implements MigrationInterface {
    name = 'Default1715454013813'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_tutor" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "date_of_birth" datetime NOT NULL, "phone" varchar NOT NULL, "zipCode" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_tutor"("id", "name", "email", "date_of_birth", "phone") SELECT "id", "name", "email", "date_of_birth", "phone" FROM "tutor"`);
        await queryRunner.query(`DROP TABLE "tutor"`);
        await queryRunner.query(`ALTER TABLE "temporary_tutor" RENAME TO "tutor"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tutor" RENAME TO "temporary_tutor"`);
        await queryRunner.query(`CREATE TABLE "tutor" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "date_of_birth" datetime NOT NULL, "phone" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "tutor"("id", "name", "email", "date_of_birth", "phone") SELECT "id", "name", "email", "date_of_birth", "phone" FROM "temporary_tutor"`);
        await queryRunner.query(`DROP TABLE "temporary_tutor"`);
    }

}
