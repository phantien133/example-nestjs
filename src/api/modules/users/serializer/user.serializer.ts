import { Exclude } from 'class-transformer';

import { UserEntity } from '../../../../modules/users/user.entity';

export class UserSerializer extends UserEntity {
  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;
}
