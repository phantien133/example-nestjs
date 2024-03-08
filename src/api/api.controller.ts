import { Controller, Get } from '@nestjs/common';

import { ApiService } from './api.service';

@Controller()
export class ApiController {
  constructor(private readonly service: ApiService) {}

  @Get()
  getAPI(): string {
    return this.service.getAPI();
  }
}
