import { Test, TestingModule } from '@nestjs/testing';

import { UserEntity } from './user.entity';

describe('UserEntity', () => {
  let entity: UserEntity;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserEntity],
    }).compile();

    entity = module.get<UserEntity>(UserEntity);
  });

  it('should be defined', () => {
    expect(entity).toBeDefined();
  });

  it('should have id', () => {
    expect(entity.attributes.id).toEqual('id');
  });
});
