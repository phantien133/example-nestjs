import { Prisma } from '@prisma/client';

export type Models = Prisma.TypeMap['meta']['modelProps'];
export type ModelName = keyof Models;
