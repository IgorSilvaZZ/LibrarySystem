import { Category } from "@modules/categories/infra/typeorm/entities/Category";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("books")
export class Book {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  author: string;

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

  @ManyToOne(() => Category)
  @JoinColumn({ name: "category_id" })
  category: Category;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
