import { forwardRef } from '@nestjs/common';
import { Module } from '@nestjs/common';

import { LabelModule } from '~/modules/label/label.module';
import { LikeModule } from '~/modules/like/like.module';
import { TaskResolver } from '~/modules/task/task.resolver';
import { TaskService } from '~/modules/task/task.service';
import { UserModule } from '~/modules/user/user.module';

@Module({
  imports: [
    forwardRef(() => UserModule),
    forwardRef(() => LabelModule),
    forwardRef(() => LikeModule),
  ],
  providers: [TaskService, TaskResolver],
  exports: [TaskService],
})
export class TaskModule {}
