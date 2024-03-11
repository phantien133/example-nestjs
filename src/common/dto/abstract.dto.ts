import { AbstractEntity } from '@common/abstract.entity';
import { omitToObject } from '@utils/obj.util';

type FieldFormatterOptions = {
  fromKeys: string[];
  field?: string;
};

export const fieldFormatter =
  ({ fromKeys, field }: FieldFormatterOptions) =>
  (target: any, _: string, descriptor: PropertyDescriptor) => {
    const key = field || fromKeys[0];
    const formatter: (...data: any[]) => any = descriptor.value;

    descriptor.value = function (input: any) {
      const data: any[] = fromKeys.map((fromKey) => input[fromKey]);
      if (target.hasOwnProperty(key)) {
        target[key] = formatter(...data);
      }
    };
    if (target instanceof AbstractDto) {
      if (!target.formatters) target.formatters = {};

      target.formatters[key] = formatter;
    }
  };

export type ConstructorDtoOptions = Partial<{ excludeFields?: { [key: string]: boolean } }>;
export class AbstractDto {
  public formatters: { [key: string]: (data: any) => any } = {};

  constructor(entity: AbstractEntity | any, { excludeFields = {} }: ConstructorDtoOptions = {}) {
    Object.keys(this.formatters).forEach((key) => {
      if (excludeFields[key]) return;

      excludeFields[key] = true;
      this[key] = this.formatters[key](entity);
    });
    omitToObject(entity, this, excludeFields);
  }
}
