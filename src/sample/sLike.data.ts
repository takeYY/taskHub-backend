import { Like } from '~/models/like.model';
import { sTask } from '~/sample/sTask.data';
import { sUser } from '~/sample/sUser.data';

export const sLike: Like[] = [
  {
    id: 1,
    taskId: sTask.find((task) => task.name === '使徒、襲来').id,
    userId: sUser.find((user) => user.name === '綾波レイ').id,
    createdAt: new Date(),
  },
  {
    id: 2,
    taskId: sTask.find((task) => task.name === '使徒、襲来').id,
    userId: sUser.find((user) => user.name === '碇ゲンドウ').id,
    createdAt: new Date(),
  },
  {
    id: 3,
    taskId: sTask.find((task) => task.name === 'ヤシマ作戦').id,
    userId: sUser.find((user) => user.name === '碇ゲンドウ').id,
    createdAt: new Date(),
  },
  {
    id: 4,
    taskId: sTask.find((task) => task.name === 'ヤシマ作戦').id,
    userId: sUser.find((user) => user.name === '碇シンジ').id,
    createdAt: new Date(),
  },
  {
    id: 5,
    taskId: sTask.find((task) => task.name === 'ヤシマ作戦').id,
    userId: sUser.find((user) => user.name === '綾波レイ').id,
    createdAt: new Date(),
  },
];
