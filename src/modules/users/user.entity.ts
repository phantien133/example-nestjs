import { User } from '@prisma/client';
import { IsEmail } from 'class-validator';

import { AbstractEntity } from '@common/abstract.entity';
import { DateField, NumberField, StringField, StringFieldOptional, fieldDecorator } from '@decorators/field.decorators';

export class UserEntity extends AbstractEntity implements User {
  @fieldDecorator()
  @NumberField({ int: true, isPositive: true })
  id: number;

  @StringField({ maxLength: 255 })
  @IsEmail()
  email: string;

  @StringFieldOptional({ maxLength: 255 })
  name: string;

  @DateField()
  createdAt: Date;

  @DateField()
  updatedAt: Date;
}
