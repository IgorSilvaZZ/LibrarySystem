import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

import { Library } from "@modules/libraries/infra/typeorm/entities/Library";

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
  library_id: string;

  @ManyToOne(() => Library)
  @JoinColumn({ name: "library_id" })
  library: Library;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
