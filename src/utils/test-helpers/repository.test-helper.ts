import { Type } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import { AbstractRepository, ModelName } from '@common/abstract.repository';
import { NestModuleImport } from '@common/types';
import { DatabaseModule } from '@config/database/database.module';

export const createRepositoryTestModule = async <Model extends ModelName, T extends AbstractRepository<Model>>(
  repositoryClass: Type<T>,
  ...imports: NestModuleImport[]
): Promise<[TestingModule, T]> => {
  const module: TestingModule = await Test.createTestingModule({
    imports: [DatabaseModule, ...imports],
    providers: [repositoryClass],
  }).compile();
  const repository = module.get<T>(repositoryClass);

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  it('should be extends AbstractRepository', () => {
    expect(repository).toBeInstanceOf(AbstractRepository);
  });

  return [module, repository];
};
