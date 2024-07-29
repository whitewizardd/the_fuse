import { Controller, Get, Query } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './book.entity';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BookService) {}

  @Get()
  async findAll(
    @Query('page') page: number = 1,
    @Query('size') size: number = 10,
  ): Promise<Book[]> {
    return this.booksService.findAll(page, size);
  }
}
