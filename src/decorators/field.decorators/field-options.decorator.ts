import { applyDecorators } from '@nestjs/common';

import { AbstractEntity } from '@common/abstract.entity';

export interface IFieldOptions {
  each?: boolean;
  swagger?: boolean;
  nullable?: boolean;
  groups?: string[];
}

export type FieldOptions = IFieldOptions;

export type RequireField<T, K extends keyof T> = T & Required<Pick<T, K>>;

export type EntityFieldOptions = {
  databaseFieldName?: string;
};
export const fieldDecorator = ({ databaseFieldName }: EntityFieldOptions = {}): PropertyDecorator =>
  applyDecorators((target, propertyKey) => {
    if (target instanceof AbstractEntity) {
      const fieldName = propertyKey as string;
      target.addAttribute(fieldName, databaseFieldName || fieldName);
    }
  });
