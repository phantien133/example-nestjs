import { Injectable } from '@nestjs/common';

import { DatabaseService } from '@config/database/database.service';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}
}
