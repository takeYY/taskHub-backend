import { Injectable, NotFoundException } from '@nestjs/common';

import { firestore } from '~/app.service';
import { Label } from '~/models/label.model';

@Injectable()
export class LabelService {
  private labelRef = firestore.collection('labels');

  async findAll(): Promise<Label[]> {
    const snapshot = await this.labelRef.get();
    const labelList = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        name: data.name,
        color: data.color,
        isActive: data.isActive,
        userId: data.userId,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
      };
    });

    return labelList;
  }

  async findOneById(id: string): Promise<Label> {
    // TODO: labelRefのwhereで直接データを取り込めるようにする
    const labels = await this.findAll();
    const result = await labels.find((label) => id === label.id);
    if (!result) {
      throw new NotFoundException();
    }
    return await result;
  }

  // get labels by user
  async getLabelsByUser(id: string): Promise<Label[]> {
    // TODO: labelRefのwhereで直接データを取り込めるようにする
    const labels = await this.findAll();
    const result = await labels.filter((label) => id === label.userId);
    if (!result) {
      throw new NotFoundException();
    }
    return await result;
  }
}
