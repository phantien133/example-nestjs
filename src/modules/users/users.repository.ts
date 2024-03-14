import { Prisma } from '@prisma/client';

import { AbstractRepository, IAbstractRepository } from '@common/abstract.repository';

export class UsersRepository extends AbstractRepository<typeof Prisma.ModelName.User> implements IAbstractRepository {
  public get ModelName() {
    return Prisma.ModelName.User;
  }
}
