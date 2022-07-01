import { Book } from "@modules/books/infra/typeorm/entities/Book";
import { User } from "@modules/users/infra/typeorm/entities/User";
import { Entity, PrimaryColumn, Column, JoinColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("loans")
export class Loan {
  @PrimaryColumn()
  id: string;

  @Column()
  user_id: string;

  @Column()
  book_id: string;

  @Column()
  start_date: Date;

  @Column()
  end_date: Date;

  @Column()
  expected_return_date: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @ManyToOne(() => Book)
  @JoinColumn({ name: "book_id" })
  book: Book;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
