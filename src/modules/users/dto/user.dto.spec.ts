import { UserDto } from './user.dto';

describe('UserDto', () => {
  let dto: UserDto;

  beforeEach(async () => {
    dto = new UserDto({ id: 1, createdAt: new Date(), updatedAt: new Date(), email: 'string', name: 'string' });
  });

  it('should be defined', () => {
    expect(dto).toBeDefined();
  });
});
