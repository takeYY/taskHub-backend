import { Injectable, NotFoundException } from '@nestjs/common';

import { firestore } from '~/app.service';
import { Task } from '~/models/task.model';
import { CreateTaskDto } from '~/modules/task/dto/create-task.dto';

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
        outputMemo: data.outputMemo,
        isDone: data.isDone,
        likeCount: data.likeCount,
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

  // get tasks by user
  async getTasksByUser(userId: string): Promise<Task[]> {
    // TODO: taskRefのwhereで直接データを取り込めるようにする
    const tasks = await this.findAllTasks();
    const result = tasks.filter((task) => userId === task.userId);

    if (!result) {
      throw new NotFoundException();
    }
    return result;
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const newTask = {
      name: createTaskDto.name,
      description: createTaskDto.description,
      outputMemo: createTaskDto.outputMemo,
      isDone: createTaskDto.isDone,
      likeCount: createTaskDto.likeCount,
      userId: createTaskDto.userId,
      labelId: createTaskDto.labelId,
      createdAt: createTaskDto.createdAt || new Date(),
      updatedAt: createTaskDto.updatedAt || new Date(),
    };
    const docRef = await this.taskRef.add(newTask);

    const result = {
      id: docRef.id,
      ...newTask,
    };

    return result;
  }
}
