import { createRepositoryTestModule } from '@utils/test-helpers/repository.test-helper';

import { UsersRepository } from './users.repository';

describe('UsersRepository', () => {
  let repository: UsersRepository;

  beforeEach(async () => {
    repository = await createRepositoryTestModule(UsersRepository)[1];
  });

  it('should have ModelName', () => {
    expect(repository.ModelName).toBe('User');
  });
});
