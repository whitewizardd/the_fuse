import { Inject, Injectable } from '@nestjs/common';
import { Book } from './book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {
  constructor(
    @Inject('Book_REPOSITORY')
    private booksRepository: Repository<Book>,
  ) {}

  async findAll(page: number = 1, size: number = 10): Promise<Book[]> {
    const [result] = await this.booksRepository.findAndCount({
      skip: (page - 1) * size,
      take: size,
      relations: ['author'],
    });
    return result;
  }
}
