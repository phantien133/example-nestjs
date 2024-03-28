import { Test, TestingModule } from '@nestjs/testing';

import { UsersModule } from '@modules/users/users.module';

import { UsersApiController } from './users.api.controller';

describe('UsersApiController', () => {
  let controller: UsersApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UsersModule],
      controllers: [UsersApiController],
    }).compile();

    controller = module.get<UsersApiController>(UsersApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
