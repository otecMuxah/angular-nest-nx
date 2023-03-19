import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiResourceUsersModule } from '@test-repo-na/api/resource/users';
import { ApiResourceAlbumsModule } from '@test-repo-na/api/resource/albums';

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
    ApiResourceAlbumsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
