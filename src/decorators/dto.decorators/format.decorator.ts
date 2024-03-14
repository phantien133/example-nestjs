import { applyDecorators } from '@nestjs/common';

export type FormatFieldOptions<InitObject, FieldType, ValueType, TargetObject> = {
  from?: string;
  format: keyof InitObject | ((obj: InitObject) => FieldType) | ((value: ValueType) => FieldType);
};
type FormatFromField<ValueType, FieldType> = (value: ValueType) => FieldType;
type FormatFromObject<InitObject, FieldType> = (obj: InitObject) => FieldType;

type FieldFormatter<InitObject, FieldType, ValueType, TargetObject> =
  | keyof TargetObject
  | FormatFromField<ValueType, FieldType>
  | FormatFromObject<InitObject, FieldType>;
type FormatterContainer<TargetObject> = {
  [key in keyof TargetObject]?: FieldFormatter<any, any, any, TargetObject>;
};
export const defineFormatterContainerDecorator =
  <TargetObject>() =>
  (target: any) => {
    let formatters: FormatterContainer<TargetObject> = {};
    Reflect.defineProperty(target.constructor.prototype, 'formatters', {
      get() {
        return formatters;
      },
      set(value: FormatterContainer<InitObject, FieldType, ValueType, TargetObject>) {
        formatters = value;
      },
      enumerable: true,
      configurable: true,
    });
  };

export const format = <InitObject, FieldType, ValueType, TargetObject>(
  options: FormatFieldOptions<InitObject, FieldType, ValueType, TargetObject>,
): PropertyDecorator => {
  return applyDecorators(
    defineFormatterContainerDecorator<InitObject, FieldType, ValueType, TargetObject>(),
    (target, propertyKey) => {
      target.formatters[propertyKey] = options.format;
    },
  );
};
