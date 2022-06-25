import { Task } from '~/models/task.model';
import { sLabels } from '~/sample/sLabel.data';
import { sUser } from '~/sample/sUser.data';

export const sTask: Task[] = [
  {
    id: '1',
    name: '使徒、襲来',
    description: '第4使徒を殲滅する',
    isDone: false,
    userId: sUser.find((user) => user.name === '碇シンジ').id,
    labelId: sLabels.find(
      (label) =>
        label.userId === sUser.find((user) => user.name === '碇シンジ').id,
    ).id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    name: 'ヤシマ作戦',
    description: 'シンジを守る',
    isDone: false,
    userId: sUser.find((user) => user.name === '綾波レイ').id,
    labelId: sLabels.find(
      (label) =>
        label.userId === sUser.find((user) => user.name === '綾波レイ').id,
    ).id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
