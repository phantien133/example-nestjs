import { Module } from '@nestjs/common';

import { NestModuleImport } from '@common/types';
import { ApiUsersModule } from 'src/api/modules/users/api-users.module';

import { ApiController } from './api.controller';
import { ApiService } from './api.service';

// API modules
const ApiModules: NestModuleImport[] = [ApiUsersModule];

const controllers: any[] = [ApiController];

@Module({
  imports: [...ApiModules],
  controllers: [...controllers],
  providers: [ApiService],
})
export class ApiModule {}
