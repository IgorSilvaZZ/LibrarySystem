import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateBook1655241072232 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "books",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "title",
            type: "varchar",
          },
          {
            name: "author",
            type: "varchar",
          },
          {
            name: "description",
            type: "text",
          },
          {
            name: "numberPages",
            type: "number",
          },
          {
            name: "language",
            type: "varchar",
          },
          {
            name: "code",
            type: "varchar",
          },
          {
            name: "category_id",
            type: "uuid",
          },
        ],
        foreignKeys: [
          {
            name: "FKCategory",
            referencedTableName: "categories",
            referencedColumnNames: ["id"],
            columnNames: ["category_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("books");
  }
}
