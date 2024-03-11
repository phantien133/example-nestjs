import { Injectable } from '@nestjs/common';

import { RegisterDTo } from './dto/register.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly repo: UsersRepository) {}

  create(data: RegisterDTo) {
    return this.repo.create({ data });
  }
}
