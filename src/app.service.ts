import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

import { sLabels } from '~/sample/sLabel.data';
import { sLike } from '~/sample/sLike.data';
import { sTask } from '~/sample/sTask.data';
import { sUser } from '~/sample/sUser.data';

admin.initializeApp();
export const firestore = admin.firestore();

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async createSamples() {
    const userRef = firestore.collection('users');
    const taskRef = firestore.collection('tasks');
    const likeRef = firestore.collection('likes');
    const labelRef = firestore.collection('labels');

    // userの作成
    const createUsers = await this.createSample(sUser, userRef);
    // taskの作成
    const createTasks = await this.createSample(sTask, taskRef);
    // likeの作成
    const createLikes = await this.createSample(sLike, likeRef);
    // labelの作成
    const createLabels = await this.createSample(sLabels, labelRef);

    Promise.all([createUsers, createTasks, createLikes, createLabels])
      .then(() => {
        return 'All Green !!!';
      })
      .catch((e) => {
        return e;
      });

    return 'failed something';
  }

  private async createSample(samples, ref) {
    const result = samples.map(async (sample) => {
      const sampleId = await sample.id;
      await delete sample.id;

      return await ref.doc(sampleId).create(sample);
    });

    return result;
  }
}
