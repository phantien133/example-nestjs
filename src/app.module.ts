import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { NestModuleImport } from '@common/types';
import { DatabaseModule } from '@config/database/database.module';
import { UsersModule } from '@modules/users/users.module';

import { ApiModule } from './api/api.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// config modules
const configModules = () => [ConfigModule.forRoot(), DatabaseModule];

// // API modules
const appModules: NestModuleImport[] = [ApiModule, UsersModule];

const controllers: any[] = [AppController];

@Module({
  imports: [...configModules(), ...appModules],
  controllers: [...controllers],
  providers: [AppService],
})
export class AppModule {}
