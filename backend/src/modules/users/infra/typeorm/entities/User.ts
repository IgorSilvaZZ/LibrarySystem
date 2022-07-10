import { Book } from "@modules/books/infra/typeorm/entities/Book";
import { Loan } from "@modules/loans/infra/typeorm/entities/Loan";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  cpf: string;

  @Column()
  rg: string;

  @Column()
  identification: string;

  @Column()
  password: string;

  @Column()
  isAdmin: boolean;

  @Column()
  isAvailable: boolean;

  @OneToMany(() => Loan, (loan) => loan.user)
  loans: Loan[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
