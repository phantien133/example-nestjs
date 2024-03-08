import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

import { DatabaseService } from '@config/database/database.service';

export type ModelName = Prisma.ModelName;
export type FieldName = keyof (typeof Prisma)[`${ModelName}ScalarFieldEnum`];

type ModelDelegates = {
  [K in ModelName]: PrismaClient[Uncapitalize<K>];
};

export interface IAbstractRepository {
  ModelName: ModelName;
}

@Injectable()
export abstract class AbstractRepository<T extends ModelName> implements IAbstractRepository {
  constructor(public readonly db: DatabaseService) {}

  findAll = this.model.findMany as ModelDelegates[T]['findMany'];
  find = this.model.findUnique as ModelDelegates[T]['findUnique'];
  findFirst = this.model.findFirst as ModelDelegates[T]['findFirst'];
  create = this.model.create as ModelDelegates[T]['create'];
  update = this.model.update as ModelDelegates[T]['update'];
  remove = this.model.delete as ModelDelegates[T]['delete'];

  public get model(): ModelDelegates[T] {
    if (!this.ModelName) {
      throw new Error('ModelName is not defined!!!');
    }

    return this.db[this.ModelName?.toLowerCase()];
  }

  public get keys(): FieldName[] {
    return Object.keys(this.model) as FieldName[];
  }

  public abstract get ModelName(): T;
}
