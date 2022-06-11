import { User } from 'src/user/models/user.models';

export const sUser: User[] = [
  {
    id: 'evangelion',
    name: 'エヴァンゲリオン',
    email: 'shinji@nerf.com',
    profile: '人類補完計画',
    avatar: '初号機',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'eva',
    name: 'エヴァ',
    email: 'rei@nerf.com',
    profile: '秘密',
    avatar: '零号機',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
