import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Book } from '../book/book.entity';

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'date', nullable: true })
  birthdate?: Date;

  @Column({ type: 'text', nullable: true })
  biography?: string;

  @OneToMany(() => Book, (book) => book.author)
  books: Book[];
}
