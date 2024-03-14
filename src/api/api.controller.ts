import { Controller, Get } from '@nestjs/common';

import { ApiService } from './api.service';

@Controller()
export class ApiController {
  constructor(private readonly service: ApiService) {}

  @Get()
  getApi(): string {
    return this.service.getApi();
  }
}
