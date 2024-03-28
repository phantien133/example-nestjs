import { attributeManagement } from '@decorators/field.decorators';

@attributeManagement()
export abstract class AbstractEntity<T> {
  protected obj: T | Partial<T>;

  constructor(obj: T | Partial<T>) {
    this.obj = obj;
    Object.assign(this, obj);
  }
}
