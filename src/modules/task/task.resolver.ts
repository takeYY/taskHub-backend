import {
  Args,
  ID,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';

import { Label } from '~/models/label.model';
import { Like } from '~/models/like.model';
import { Task } from '~/models/task.model';
import { User } from '~/models/user.model';
import { LabelService } from '~/modules/label/label.service';
import { LikeService } from '~/modules/like/like.service';
import { TaskService } from '~/modules/task/task.service';
import { UserService } from '~/modules/user/user.service';

@Resolver((of) => Task)
export class TaskResolver {
  constructor(
    private taskService: TaskService,
    private userService: UserService,
    private labelService: LabelService,
    private likeService: LikeService,
  ) {}

  @Query(() => [Task], { nullable: 'items' })
  async tasks(): Promise<Task[]> {
    return await this.taskService.findAllTasks();
  }

  @Query(() => Task)
  async task(@Args('id', { type: () => ID }) id: string): Promise<Task> {
    return await this.taskService.findTaskById(id);
  }

  @Query(() => [Task], { nullable: 'items' })
  async tasksByUser(
    @Args('userId', { type: () => ID }) userId: string,
  ): Promise<Task[] | []> {
    try {
      return await this.taskService.getTasksByUser(userId);
    } catch {
      return [];
    }
  }

  @ResolveField(() => User)
  async user(@Parent() task: Task): Promise<User> {
    return await this.userService.findUserById(task.userId);
  }

  @ResolveField(() => Label, { nullable: true })
  async label(@Parent() task: Task): Promise<Label | null> {
    try {
      return await this.labelService.findOneById(task.labelId);
    } catch {
      return null;
    }
  }

  @ResolveField(() => Like, { nullable: true })
  async likeByUser(
    @Parent() task: Task,
    @Args({ name: 'userId', type: () => ID }) userId: string,
  ): Promise<Like | null> {
    try {
      return await this.likeService.findTaskLikedByUserId(task.id, userId);
    } catch {
      return null;
    }
  }
}
