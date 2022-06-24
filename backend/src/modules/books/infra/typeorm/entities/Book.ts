import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

import { Category } from "@modules/categories/infra/typeorm/entities/Category";
import { Author } from "./Author";

@Entity("books")
export class Book {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  numberPages: number;

  @Column()
  language: string;

  @Column()
  code: string;

  @Column()
  quantity: number;

  @Column()
  category_id: string;

  @Column()
  author_id: string;

  @ManyToOne(() => Category)
  @JoinColumn({ name: "category_id" })
  category: Category;

  @ManyToOne(() => Author)
  @JoinColumn({ name: "author_id" })
  author: Author;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
