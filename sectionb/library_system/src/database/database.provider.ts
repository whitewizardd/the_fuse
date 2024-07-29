import { DataSource } from 'typeorm';
import { Book } from '../book/book.entity';
import { Author } from '../author/author.entity';

export const databaseProvider = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '',
        database: 'library',
        entities: [Book, Author],
        synchronize: false,
      });
      return dataSource.initialize();
    },
  },
];