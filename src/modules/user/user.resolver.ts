import { ValidationPipe } from '@nestjs/common';
import {
  Args,
  ID,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';

import { Label } from '~/models/label.model';
import { User } from '~/models/user.model';
import { LabelService } from '~/modules/label/label.service';
import { CreateUserDto } from '~/modules/user/dto/create-user.dto';
import { UserService } from '~/modules/user/user.service';

@Resolver((of) => User)
export class UserResolver {
  constructor(
    private userService: UserService,
    private labelService: LabelService,
  ) {}

  @Query(() => [User], { nullable: 'items' })
  async users(): Promise<User[]> {
    return await this.userService.findAllUsers();
  }

  @Query(() => User, { nullable: true })
  async user(
    @Args('id', { type: () => ID }, ValidationPipe) id: string,
  ): Promise<User> {
    try {
      return await this.userService.findUserById(id);
    } catch {
      return null;
    }
  }

  // create user
  @Mutation(() => User)
  async createUser(
    @Args('user', ValidationPipe) createUserDto: CreateUserDto,
  ): Promise<User> {
    return await this.userService.createUser(createUserDto);
  }

  // get labels by user
  @ResolveField(() => [Label])
  async labels(@Parent() user: User): Promise<Label[]> {
    return await this.labelService.getLabelsByUser(user.id);
  }
}
