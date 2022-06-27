import { Injectable, NotFoundException } from '@nestjs/common';

import { firestore } from '~/app.service';
import { User } from '~/models/user.model';
import { CreateUserDto } from '~/modules/user/dto/create-user.dto';

@Injectable()
export class UserService {
  private userRef = firestore.collection('users');

  async findAllUsers(): Promise<User[]> {
    const snapshot = await this.userRef.get();
    const userList = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        name: data.name,
        email: data.email,
        profile: data.profile,
        avatar: data.avatar,
        createdAt: data.createdAt.toDate(),
        updatedAt: data.updatedAt.toDate(),
      };
    });

    return userList;
  }

  async findUserById(id: string): Promise<User> {
    // TODO: userRefのwhereで直接データを絞り込むようにする
    const users = await this.findAllUsers();
    const result = await users.find((user) => id === user.id);
    if (!result) {
      throw new NotFoundException();
    }
    return await result;
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const newUser = {
      name: createUserDto.name,
      profile: createUserDto.profile,
      avatar: createUserDto.avatar || null,
      email: createUserDto.email,
      createdAt: createUserDto.createdAt || new Date(),
      updatedAt: createUserDto.updatedAt || new Date(),
    };
    await this.userRef.doc(createUserDto.id).create(newUser);

    const result = {
      id: createUserDto.id,
      ...newUser,
    };

    return result;
  }
}
