import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { User } from '../../models/user.model';
import { UserService } from './user.service';

@Resolver((of) => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [User], { nullable: 'items' })
  async users() {
    return await this.userService.findAllUsers();
  }

  @Query(() => User)
  async user(@Args('id', { type: () => ID }) id: string) {
    return await this.userService.findUserById(id);
  }
}
