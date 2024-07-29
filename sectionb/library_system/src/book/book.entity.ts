import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Author } from '../author/author.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  publicationYear: number;

  @Column()
  genre: string;

  @ManyToOne(() => Author, (author) => author.books)
  author: Author;
}
