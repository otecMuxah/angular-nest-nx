import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiResourceUsersModule } from '@test-repo-na/api/resource/users';
import { ApiResourceAlbumsModule } from '@test-repo-na/api/resource/albums';
import { ApiResourcePhotoModule } from '@test-repo-na/api/resource/photo';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'nestjs_db',
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      synchronize: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '../../uploads'),
      serveRoot: '/uploads/',
    }),
    ConfigModule.forRoot(),
    ApiResourceUsersModule,
    ApiResourceAlbumsModule,
    ApiResourcePhotoModule,
  ],
})
export class AppModule {}
