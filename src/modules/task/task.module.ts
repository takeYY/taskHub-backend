import { Module } from '@nestjs/common';

import { TaskResolver } from '~/modules/task/task.resolver';
import { TaskService } from '~/modules/task/task.service';

@Module({
  providers: [TaskService, TaskResolver],
})
export class TaskModule {}
