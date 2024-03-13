import { applyDecorators } from '@nestjs/common';
import { ApiProperty, ApiPropertyOptions } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, NotEquals } from 'class-validator';

import { IsNullable, IsUndefinable } from '@decorators/validator.decorators';

import { IFieldOptions, fieldDecorator } from './field-options.decorator';

export function DateField({
  databaseFieldName,
  ...options
}: Omit<ApiPropertyOptions, 'type'> & IFieldOptions = {}): PropertyDecorator {
  const decorators = [Type(() => Date), IsDate()];

  if (options.nullable) {
    decorators.push(IsNullable());
  } else {
    decorators.push(NotEquals(null));
  }

  if (options.swagger !== false) {
    decorators.push(ApiProperty({ type: Date, ...options }));
  }

  return applyDecorators(fieldDecorator({ databaseFieldName }), ...decorators);
}

export function DateFieldOptional(
  options: Omit<ApiPropertyOptions, 'type' | 'required'> & IFieldOptions = {},
): PropertyDecorator {
  return applyDecorators(IsUndefinable(), DateField({ ...options, required: false }));
}
