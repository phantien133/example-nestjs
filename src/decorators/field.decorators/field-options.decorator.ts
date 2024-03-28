import 'reflect-metadata';
import { applyDecorators } from '@nestjs/common';

export interface IFieldOptions {
  each?: boolean;
  swagger?: boolean;
  nullable?: boolean;
  groups?: string[];
  databaseFieldName?: string;
}

export type FieldOptions = IFieldOptions;

export type RequireField<T, K extends keyof T> = T & Required<Pick<T, K>>;

export type EntityFieldOptions = Pick<FieldOptions, 'databaseFieldName'>;

export type IndexedAttributes = { [key: string]: string };

export const attributeManagement = () => (target: any) => {
  const attributes: IndexedAttributes = {};
  Reflect.defineProperty(target.constructor.prototype, 'attributes', {
    get() {
      return attributes;
    },
    set(value: IndexedAttributes) {
      Object.assign(attributes, value);
    },
    enumerable: true,
    configurable: true,
  });
};

export const fieldDecorator = ({ databaseFieldName }: EntityFieldOptions = {}): PropertyDecorator =>
  applyDecorators(attributeManagement(), (target, propertyKey) => {
    target.attributes[propertyKey] = databaseFieldName || propertyKey;
  });
