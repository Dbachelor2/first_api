import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { BooksModule } from './books/books.module';
import { dataSource } from './db/config';

@Module({
  imports: [
    BookModule,
    UsersModule,
    TypeOrmModule.forRoot(dataSource),
    BooksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
