import { Label } from '~/models/label.model';
import { sUser } from '~/sample/sUser.data';

export const sLabels: Label[] = [
  {
    id: 1,
    name: 'Fight',
    color: '8b008b',
    isActive: true,
    userId: sUser.find((user) => user.name === '碇シンジ').id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: 'Fight',
    color: 'ffd700',
    isActive: true,
    userId: sUser.find((user) => user.name === '綾波レイ').id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    name: 'Fight',
    color: 'dc143c',
    isActive: true,
    userId: sUser.find((user) => user.name === '式波・アスカ・ラングレー').id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 4,
    name: 'Fight',
    color: 'ffb6c1',
    isActive: true,
    userId: sUser.find((user) => user.name === '真希波・マリ・イラストリアス')
      .id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 5,
    name: 'Fight',
    color: '4b0082',
    isActive: true,
    userId: sUser.find((user) => user.name === '渚カヲル').id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 6,
    name: 'Protect',
    color: 'fff0f5',
    isActive: true,
    userId: sUser.find((user) => user.name === '綾波レイ').id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
