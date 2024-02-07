import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [PrismaModule, UsersModule, ArticleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
