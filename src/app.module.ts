import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UserModule } from './user/user.module';
import { LabelModule } from './label/label.module';
import { TaskModule } from './task/task.module';
import { LikeModule } from './like/like.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // TODO: @nestjs/configのConfigServiceを利用して、開発用と本番用を分けるようにする
      // schemaファイルのパスを指定
      /* ローカル開発用 */
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      /* 本番用 */
      // autoSchemaFile: true,
      // 生成されたschemaを自動でsortされるためのオプション
      sortSchema: true,
    }),
    UserModule,
    LabelModule,
    TaskModule,
    LikeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
