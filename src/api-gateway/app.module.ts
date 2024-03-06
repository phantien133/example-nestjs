import { DynamicModule, ForwardReference, Module, Type } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from '@config/database/database.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

type NestModuleImport = Type<any> | DynamicModule | Promise<DynamicModule> | ForwardReference<any>;

// config modules
const configModules: NestModuleImport[] = [ConfigModule.forRoot(), DatabaseModule];

// API modules
const appModules: NestModuleImport[] = [];

const controllers: any[] = [AppController];

@Module({
  imports: [...configModules, ...appModules],
  controllers: [...controllers],
  providers: [AppService],
})
export class AppModule {}
