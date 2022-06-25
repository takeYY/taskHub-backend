import { Injectable, NotFoundException } from '@nestjs/common';

import { firestore } from '~/app.service';
import { Task } from '~/models/task.model';

@Injectable()
export class TaskService {
  private taskRef = firestore.collection('tasks');

  async findAllTasks(): Promise<Task[]> {
    const snapshot = await this.taskRef.get();
    const taskList = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        name: data.name,
        description: data.description,
        isDone: data.isDone,
        userId: data.userId,
        labelId: data.labelId,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
      };
    });

    return taskList;
  }

  async findTaskById(id: string): Promise<Task> {
    // TODO: taskRefのwhereで直接データを絞り込むようにする
    const tasks = await this.findAllTasks();
    const result = await tasks.find((task) => id === task.id);
    if (!result) {
      throw new NotFoundException();
    }
    return await result;
  }
}
