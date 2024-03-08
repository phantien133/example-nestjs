import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiService {
  getAPI(): string {
    return 'example-nestjs API';
  }
}
