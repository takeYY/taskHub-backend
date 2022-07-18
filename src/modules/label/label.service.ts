import { Injectable, NotFoundException } from '@nestjs/common';

import { firestore } from '~/app.service';
import { Label } from '~/models/label.model';
import { CreateLabelDto } from '~/modules/label/dto/create-label.dto';

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
  async getLabelsByUser(userId: string): Promise<Label[]> {
    // TODO: labelRefのwhereで直接データを取り込めるようにする
    const labels = await this.findAll();
    const result = await labels.filter((label) => userId === label.userId);
    if (!result) {
      throw new NotFoundException();
    }
    return await result;
  }

  async createLabel(createLabelDto: CreateLabelDto): Promise<Label> {
    const newLabel = {
      name: createLabelDto.name,
      color: createLabelDto.color,
      isActive: createLabelDto.isActive || true,
      userId: createLabelDto.userId,
      createdAt: createLabelDto.createdAt || new Date(),
      updatedAt: createLabelDto.updatedAt || new Date(),
    };

    const docRef = await this.labelRef.add(newLabel);

    const result = {
      id: docRef.id,
      ...newLabel,
    };

    return result;
  }
}
