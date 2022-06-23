import { Injectable, NotFoundException } from '@nestjs/common';
import { firestore } from 'src/app.service';
import { sUser } from 'src/sample/sUser.data';
import { User } from '../../models/user.model';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  private users: User[] = sUser;
  private userRef = firestore.collection('users');

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
