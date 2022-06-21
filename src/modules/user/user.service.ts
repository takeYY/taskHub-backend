import { Injectable, NotFoundException } from '@nestjs/common';
import { sUser } from 'src/sample/sUser.data';
import { User } from '../../models/user.model';

@Injectable()
export class UserService {
  private users: User[] = sUser;

  async findAllUsers(): Promise<User[]> {
    return await this.users;
  }

  async findUserById(id: string): Promise<User> {
    const result = await this.users.find((user) => id === user.id);
    if (!result) {
      throw new NotFoundException();
    }
    return await result;
  }
}
