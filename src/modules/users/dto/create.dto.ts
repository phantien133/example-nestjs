import { User } from '@prisma/client';

export class CreateDTo implements Partial<User> {
  email: string;
  name?: string;
}
