import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiService {
  getApi(): string {
    return 'example-nestjs Api';
  }
}
