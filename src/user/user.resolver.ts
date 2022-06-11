import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { User } from './models/user.models';
import { UserService } from './user.service';

@Resolver((of) => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [User], { nullable: 'items' })
  async findAllUsers() {
    return this.userService.findAllUsers();
  }

  @Query(() => User)
  async findUserById(@Args('id', { type: () => ID }) id: string) {
    return this.userService.findUserById(id);
  }
}
