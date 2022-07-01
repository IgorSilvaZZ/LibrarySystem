import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateLoan1656631755287 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "loans",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "user_id",
            type: "uuid",
          },
          {
            name: "book_id",
            type: "uuid",
          },
          {
            name: "start_date",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "end_date",
            type: "timestamp",
          },
          {
            name: "expected_return_date",
            type: "timestamp",
          },
        ],
        foreignKeys: [
          {
            name: "FKUserLoan",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          {
            name: "FKBookLoan",
            referencedTableName: "books",
            referencedColumnNames: ["id"],
            columnNames: ["book_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
