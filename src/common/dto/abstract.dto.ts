import { AbstractEntity } from '@common/abstract.entity';
import { omitToObject } from '@utils/obj.util';

export type ConstructorDtoOptions = Partial<{ excludeFields?: string[] }>;
export class AbstractDto {
  constructor(entity: AbstractEntity, options?: ConstructorDtoOptions) {
    omitToObject(entity, this, options?.excludeFields || []);
  }
}
