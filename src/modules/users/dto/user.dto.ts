import { User } from '@prisma/client';

import { AbstractDto, ConstructorDtoOptions, fieldFormatter } from '@common/dto';
import { StringField } from '@decorators/field.decorators';

import { UserEntity } from '../user.entity';

export class UserDto extends AbstractDto {
  constructor(user: UserEntity | User, options?: ConstructorDtoOptions) {
    super(user, options);
  }

  @StringField({ maxLength: 255 })
  ids: string;

  @fieldFormatter({ field: 'ids', fromKeys: ['id'] })
  formatId(id: number) {
    return id + 1;
  }
}
