import { uniq } from 'lodash';

type DefaultKeys = 'id' | 'createdAt' | 'updatedAt';
const defaultProjectKeys = ['id', 'createdAt', 'updatedAt'] as const;

type Projection<K extends string | number | symbol> = {
  [P in K]: true;
};

export function createProjectionOmit<T extends object, K extends keyof T>(
  obj: T,
  keys: K[],
  ignoreDefault: true,
): Projection<K | DefaultKeys> & { keys: (K | DefaultKeys)[] };
export function createProjectionOmit<T extends object, K extends keyof T>(
  obj: T,
  keys: K[],
): Projection<K> & { keys: K[] };

export function createProjectionOmit<T extends object, K extends keyof T>(
  obj: T,
  keys: K[],
  ignoreDefault: boolean = false,
): any {
  const projection: Partial<Projection<K | DefaultKeys>> = {};

  // Add default keys if ignoreDefault is true
  if (!ignoreDefault) {
    defaultProjectKeys.forEach((key) => {
      projection[key] = true;
    });
  }

  // Add specified keys
  for (const key of keys) {
    projection[key] = true;
  }

  // @ts-expect-error settings keys for the projection
  projection.keys = uniq([...keys, ...(ignoreDefault ? [] : defaultProjectKeys)]);
  return projection as any;
}
