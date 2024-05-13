import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1715637951310 implements MigrationInterface {
    name = 'Default1715637951310'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tutor" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "date_of_birth" datetime NOT NULL, "phone" varchar NOT NULL, "zipCode" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "pet" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "species" varchar NOT NULL, "carry" varchar NOT NULL, "weight" integer NOT NULL, "date_of_birth" datetime NOT NULL, "tutorId" integer)`);
        await queryRunner.query(`CREATE TABLE "temporary_pet" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "species" varchar NOT NULL, "carry" varchar NOT NULL, "weight" integer NOT NULL, "date_of_birth" datetime NOT NULL, "tutorId" integer, CONSTRAINT "FK_22cfa8368debb7a89ff6a97a3fa" FOREIGN KEY ("tutorId") REFERENCES "tutor" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_pet"("id", "name", "species", "carry", "weight", "date_of_birth", "tutorId") SELECT "id", "name", "species", "carry", "weight", "date_of_birth", "tutorId" FROM "pet"`);
        await queryRunner.query(`DROP TABLE "pet"`);
        await queryRunner.query(`ALTER TABLE "temporary_pet" RENAME TO "pet"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pet" RENAME TO "temporary_pet"`);
        await queryRunner.query(`CREATE TABLE "pet" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "species" varchar NOT NULL, "carry" varchar NOT NULL, "weight" integer NOT NULL, "date_of_birth" datetime NOT NULL, "tutorId" integer)`);
        await queryRunner.query(`INSERT INTO "pet"("id", "name", "species", "carry", "weight", "date_of_birth", "tutorId") SELECT "id", "name", "species", "carry", "weight", "date_of_birth", "tutorId" FROM "temporary_pet"`);
        await queryRunner.query(`DROP TABLE "temporary_pet"`);
        await queryRunner.query(`DROP TABLE "pet"`);
        await queryRunner.query(`DROP TABLE "tutor"`);
    }

}
