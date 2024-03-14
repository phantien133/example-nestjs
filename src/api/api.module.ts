import { Module } from '@nestjs/common';

import { ApiController } from './api.controller';
import { ApiService } from './api.service';

const controllers: any[] = [ApiController];

export { ApiModules } from './api-routers.module';
@Module({
  controllers: [...controllers],
  providers: [ApiService],
})
export class ApiModule {}
