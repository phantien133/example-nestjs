import { UsersApiModule } from '@api/users/users.api.module';
import { NestModuleImport } from '@common/types';

export const ApiModules: NestModuleImport[] = [UsersApiModule];
// path: '/api',
// module: ApiModule,
export const ApiRouters = [
  {
    path: 'users',
    module: UsersApiModule,
  },
];
