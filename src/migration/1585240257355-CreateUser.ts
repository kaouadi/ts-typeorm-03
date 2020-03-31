import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUser1585240257355 implements MigrationInterface {
    name = 'CreateUser1585240257355'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`, undefined);
    }

}



/*


import {MigrationInterface, QueryRunner, Table, TableIndex, TableColumn, TableForeignKey } from "typeorm";

export class QuestionRefactoringTIMESTAMP implements MigrationInterface {

    async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "question",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true
                },
                {
                    name: "name",
                    type: "varchar",
                }
            ]
        }), true)

        await queryRunner.createIndex("question", new TableIndex({
            name: "IDX_QUESTION_NAME",
            columnNames: ["name"]
        }));

        await queryRunner.createTable(new Table({
            name: "answer",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true
                },
                {
                    name: "name",
                    type: "varchar",
                }
            ]
        }), true);

        await queryRunner.addColumn("answer", new TableColumn({
            name: "questionId",
            type: "int"
        }));

        await queryRunner.createForeignKey("answer", new TableForeignKey({
            columnNames: ["questionId"],
            referencedColumnNames: ["id"],
            referencedTableName: "question",
            onDelete: "CASCADE"
        }));
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("question");
        const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("questionId") !== -1);
        await queryRunner.dropForeignKey("question", foreignKey);
        await queryRunner.dropColumn("question", "questionId");
        await queryRunner.dropTable("answer");
        await queryRunner.dropIndex("question", "IDX_QUESTION_NAME");
        await queryRunner.dropTable("question");
    }

}






*/
