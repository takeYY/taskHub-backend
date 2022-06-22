import {
  Args,
  ID,
  Query,
  Resolver,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Label } from 'src/models/label.model';
import { User } from '../../models/user.model';
import { LabelService } from '../label/label.service';
import { UserService } from './user.service';

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

  @Query(() => User)
  async user(@Args('id', { type: () => ID }) id: string): Promise<User> {
    return await this.userService.findUserById(id);
  }

  // get labels by user
  @ResolveField(() => [Label])
  async labels(@Parent() user: User): Promise<Label[]> {
    return await this.labelService.getLabelsByUser(user.id);
  }
}
