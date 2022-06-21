import { Injectable, NotFoundException } from '@nestjs/common';

import { Task } from '../models/task.model';
import { sTask } from 'src/sample/sTask.data';

@Injectable()
export class TaskService {
  private tasks: Task[] = sTask;

  async findAllTasks(): Promise<Task[]> {
    return await this.tasks;
  }

  async findTaskById(id: number): Promise<Task> {
    const result = await this.tasks.find((task) => id === task.id);
    if (!result) {
      throw new NotFoundException();
    }
    return await result;
  }
}
