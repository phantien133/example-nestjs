import { applyDecorators } from '@nestjs/common';
import { ApiProperty, ApiPropertyOptions } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, MaxLength, MinLength, NotEquals } from 'class-validator';

import { IsNullable, IsUndefinable } from '@decorators/validator.decorators';

import { IFieldOptions, fieldDecorator } from './field-options.decorator';

interface IStringFieldOptions extends IFieldOptions {
  minLength?: number;
  maxLength?: number;
  toLowerCase?: boolean;
  toUpperCase?: boolean;
}

export function StringField(options: Omit<ApiPropertyOptions, 'type'> & IStringFieldOptions = {}): PropertyDecorator {
  const decorators = [Type(() => String), IsString({ each: options.each })];

  if (options.nullable) {
    decorators.push(IsNullable({ each: options.each }));
  } else {
    decorators.push(NotEquals(null, { each: options.each }));
  }

  if (options.swagger !== false) {
    decorators.push(ApiProperty({ type: String, ...options, isArray: options.each }));
  }

  const minLength = options.minLength || 1;

  decorators.push(MinLength(minLength, { each: options.each }));

  if (options.maxLength) {
    decorators.push(MaxLength(options.maxLength, { each: options.each }));
  }

  if (options.toLowerCase) {
    decorators.push(ToLowerCase());
  }

  if (options.toUpperCase) {
    decorators.push(ToUpperCase());
  }

  return applyDecorators(fieldDecorator(), ...decorators);
}

export function StringFieldOptional(
  options: Omit<ApiPropertyOptions, 'type' | 'required'> & IStringFieldOptions = {},
): PropertyDecorator {
  return applyDecorators(fieldDecorator(), IsUndefinable(), StringField({ required: false, ...options }));
}
function ToLowerCase(): PropertyDecorator {
  throw new Error('Function not implemented.');
}

function ToUpperCase(): PropertyDecorator {
  throw new Error('Function not implemented.');
}
