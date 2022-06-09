import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("libraries")
export class Library {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  street: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  cep: string;

  @Column()
  uf: string;

  @Column()
  neighborhood: string;

  @Column()
  number: string;

  @Column()
  hourOpen: string;

  @Column()
  hourClose: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
