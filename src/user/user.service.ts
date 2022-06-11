import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './models/user.models';

@Injectable()
export class UserService {
  private users: User[] = [
    {
      id: 'evangelion',
      name: 'エヴァンゲリオン',
      email: 'shinji@nerf.com',
      profile: '人類補完計画',
      avatar: '初号機',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'eva',
      name: 'エヴァ',
      email: 'rei@nerf.com',
      profile: '秘密',
      avatar: '零号機',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  findAllUsers(): User[] {
    return this.users;
  }

  findUserById(id: string): User {
    const result = this.users.find((user) => id === user.id);
    if (!result) {
      throw new NotFoundException();
    }
    return result;
  }
}
