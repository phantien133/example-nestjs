import { User } from '@prisma/client';

import { AbstractDto, ConstructorDtoOptions, fieldFormatter } from '@common/dto';
import { StringField } from '@decorators/field.decorators';

import { UserEntity } from '../user.entity';

export class UserDto extends AbstractDto<UserEntity> {
  constructor(user: UserEntity | User, options?: ConstructorDtoOptions<UserEntity>) {
    super(user, options);
  }

  @fieldFormatter({ field: 'ids', fromKeys: ['id'] })
  formatId(id: number) {
    return `id: ${id}`;
  }

  @StringField({ maxLength: 255 })
  ids: string;
}
