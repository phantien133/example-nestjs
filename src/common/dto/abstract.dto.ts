import { omitToObject } from '@utils/obj.util';

type FieldFormatterOptions = {
  fromKeys?: string[];
  field: string;
};

export const fieldFormatter =
  ({ fromKeys, field }: FieldFormatterOptions) =>
  (target: any, _: string, descriptor: PropertyDescriptor) => {
    const key = field;
    const formatter = function (input: any) {
      let data: any[];
      if (fromKeys?.length > 0) {
        data = fromKeys.map((key) => input[key]);
      } else {
        data = [input];
      }
      target[key] = descriptor.value(...data);
    };
    if (target instanceof AbstractDto) {
      if (!target.fieldFormatters) target.fieldFormatters = {};

      target.fieldFormatters[key] = formatter;
    }
  };

export type ConstructorDtoOptions<T> = { exclude?: { [key in keyof T]: boolean } };
export class AbstractDto<T> {
  public fieldFormatters: { [key: string]: (data: any) => any } = {};

  constructor(entity: T | Partial<T> | AbstractDto<any>, { exclude }: ConstructorDtoOptions<T>) {
    const excludedFields: { [key: string]: boolean } = {};

    Object.keys(this.formatters).forEach((key) => {
      if (exclude && exclude[key]) return;

      excludedFields[key] = true;
      this[key] = this.formatters[key](entity);
    });
    omitToObject(entity, this, exclude);
  }

  protected get formatters() {
    return this.constructor.prototype.fieldFormatters;
  }
}
