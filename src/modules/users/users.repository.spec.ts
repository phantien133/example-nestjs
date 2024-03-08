import { Test, TestingModule } from '@nestjs/testing';

import { AbstractRepository } from '@common/abstract.repository';
import { DatabaseModule } from '@config/database/database.module';

import { UsersRepository } from './users.repository';

describe('UsersRepository', () => {
  let repository: UsersRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      providers: [UsersRepository],
    }).compile();

    repository = module.get<UsersRepository>(UsersRepository);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  it('should be extends AbstractRepository', () => {
    expect(repository).toBeInstanceOf(AbstractRepository);
  });

  it('should have ModelName', () => {
    expect(repository.ModelName).toBe('User');
  });
});
