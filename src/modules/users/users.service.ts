import { Injectable } from '@nestjs/common';

import { CreateDTo } from './dto/create.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly repo: UsersRepository) {}

  create(data: CreateDTo) {
    return this.repo.create({ data });
  }
}
