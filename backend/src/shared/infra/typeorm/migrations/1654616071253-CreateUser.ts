import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1654616071253 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "email",
            type: "varchar",
          },
          {
            name: "cpf",
            type: "varchar",
          },
          {
            name: "rg",
            type: "varchar",
          },
          {
            name: "identification",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "password",
            type: "varchar",
          },
          {
            name: "isAdmin",
            type: "boolean",
          },
          {
            name: "isAvailable",
            type: "boolean",
            default: true,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
