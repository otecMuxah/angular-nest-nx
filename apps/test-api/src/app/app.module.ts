import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiResourceUsersModule } from '@test-repo-na/api/resource/users';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'nestjs_db',
      username: 'root',
      password: 'root',
      database: 'coding_challenge',
      synchronize: true,
    }),
    ApiResourceUsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
