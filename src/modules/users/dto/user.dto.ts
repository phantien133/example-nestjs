import { AbstractDto, ConstructorDtoOptions } from '@common/dto';

import { UserEntity } from '../user.entity';

export class UserDto extends AbstractDto {
  constructor(user: UserEntity, options: ConstructorDtoOptions) {
    super(user, options);
  }
}
