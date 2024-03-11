import { DateField, NumberField, StringFieldOptional } from '@decorators/field.decorators';

import { AbstractDto } from './dto/abstract.dto';
import { Constructor } from './types';

export abstract class AbstractEntity<DTO extends AbstractDto = AbstractDto, O = never> {
  private dtoClass?: Constructor<DTO, [AbstractEntity, O?]>;
  private attrs: { [key: string]: string };

  @NumberField({ int: true, isPositive: true })
  id!: number;

  @StringFieldOptional({ maxLength: 255 })
  name: string;

  @DateField()
  createdAt: Date;

  @DateField()
  updatedAt: Date;

  toDto(options?: O): DTO {
    const dtoClass = this.dtoClass;

    if (!dtoClass) {
      throw new Error(`You need to use @UseDto on class (${this.constructor.name}) be able to call toDto function`);
    }

    return new dtoClass(this, options);
  }

  public get attributes() {
    return this.attrs;
  }

  public addAttribute(key: string, value: string) {
    if (!this.attrs) {
      this.attrs = {};
    }
    this.attrs[key] = value;
  }
}
