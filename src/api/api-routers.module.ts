import { ApiUsersModule } from 'src/api/modules/users/api-users.module';

// path: '/api',
// module: ApiModule,
export const APIRouters = [
  {
    path: 'users',
    module: ApiUsersModule,
  },
];
