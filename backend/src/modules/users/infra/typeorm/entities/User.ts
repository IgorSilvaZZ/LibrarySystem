import { Column, Entity, PrimaryColumn } from "typeorm";
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
  password: string;

  @Column()
  isAdmin: boolean;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
