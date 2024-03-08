import { User } from '@prisma/client';

export class RegisterDTo implements Partial<User> {
  email: string;
  name?: string;
}
