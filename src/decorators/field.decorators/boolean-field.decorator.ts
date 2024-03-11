import { applyDecorators } from '@nestjs/common';
import { ApiProperty, ApiPropertyOptions } from '@nestjs/swagger';
import { IsBoolean, NotEquals } from 'class-validator';

import { ToBoolean } from '@decorators/transform.decorators';
import { IsNullable, IsUndefinable } from '@decorators/validator.decorators';

import { IFieldOptions, fieldDecorator } from './field-options.decorator';

export type IBooleanFieldOptions = IFieldOptions;
export function BooleanField(options: Omit<ApiPropertyOptions, 'type'> & IBooleanFieldOptions = {}): PropertyDecorator {
  const decorators = [ToBoolean(), IsBoolean()];

  if (options.nullable) {
    decorators.push(IsNullable());
  } else {
    decorators.push(NotEquals(null));
  }

  if (options.swagger !== false) {
    decorators.push(ApiProperty({ type: Boolean, ...options }));
  }

  return applyDecorators(fieldDecorator(), ...decorators);
}

export function BooleanFieldOptional(
  options: Omit<ApiPropertyOptions, 'type' | 'required'> & IBooleanFieldOptions = {},
): PropertyDecorator {
  return applyDecorators(fieldDecorator(), IsUndefinable(), BooleanField({ required: false, ...options }));
}
