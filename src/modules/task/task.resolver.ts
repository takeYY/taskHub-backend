import { Args, Int, Query, Resolver } from '@nestjs/graphql';

import { Task } from '~/models/task.model';
import { TaskService } from '~/modules/task/task.service';

@Resolver((of) => Task)
export class TaskResolver {
  constructor(private taskService: TaskService) {}

  @Query(() => [Task], { nullable: 'items' })
  async tasks(): Promise<Task[]> {
    return await this.taskService.findAllTasks();
  }

  @Query(() => Task)
  async task(@Args('id', { type: () => Int }) id: number): Promise<Task> {
    return await this.taskService.findTaskById(id);
  }
}
