import { User } from 'src/user/models/user.models';

export const sUser: User[] = [
  {
    id: 'shinji',
    name: '碇シンジ',
    email: 'shinjiIkari@nerv.sma.jp',
    profile:
      '逃げちゃダメだ、逃げちゃダメだ、逃げちゃダメだ、逃げちゃダメだ、逃げちゃダメだ！－やります 僕が乗ります！',
    avatar: '初号機',
    createdAt: new Date('2001-06-06'),
    updatedAt: new Date('2001-06-06'),
  },
  {
    id: 'rei',
    name: '綾波レイ',
    email: 'reiAyanami@nerv.sma.jp',
    profile: 'ごめんなさい。こういうときどんな顔をすればいいかわからないの。',
    avatar: '零号機',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'asuka',
    name: '式波・アスカ・ラングレー',
    email: 'asukaShikinami@nerv.sma.jp',
    profile: 'あんたバカぁ？',
    avatar: '2号機',
    createdAt: new Date('2001-12-04'),
    updatedAt: new Date('2001-12-04'),
  },
  {
    id: 'mari',
    name: '真希波・マリ・イラストリアス',
    email: 'mariMakinami@nerv.sma.jp',
    profile: 'だけどまぁ…そうやっていじけていたって、何にも楽しい事ないよ',
    avatar: '8号機',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'kaoru',
    name: '渚カヲル',
    email: 'kaoruNagisa@nerv.sma.jp',
    profile:
      '怖いのかい？人と触れ合うのが。他人を知らなければ裏切られることも、互いに傷つくこともない。でも寂しさを忘れることもないよ',
    avatar: '13号機',
    createdAt: new Date('2000-09-13'),
    updatedAt: new Date('2000-09-13'),
  },
  {
    id: 'gendo',
    name: '碇ゲンドウ',
    email: 'gendoIkari@nerv.sma.jp',
    profile: '乗るなら早くしろ。でなければ帰れ！',
    avatar: '',
    createdAt: new Date('1967-04-29'),
    updatedAt: new Date('1967-04-29'),
  },
];
