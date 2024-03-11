import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RouterModule } from '@nestjs/core';

import { NestModuleImport } from '@common/types';
import { DatabaseModule } from '@config/database/database.module';

import { APIRouters } from './api/api-routers.module';
import { ApiModule } from './api/api.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// config modules
const configModules = () => [ConfigModule.forRoot(), DatabaseModule];

// // API modules
const appModules: NestModuleImport[] = [ApiModule];

const controllers: any[] = [AppController];

@Module({
  imports: [
    ...configModules(),
    ...appModules,
    RouterModule.register([
      {
        path: '/api',
        module: ApiModule,
        children: APIRouters,
      },
    ]),
  ],
  controllers: [...controllers],
  providers: [AppService],
})
export class AppModule {}
