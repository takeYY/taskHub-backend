import { Injectable, NotFoundException } from '@nestjs/common';

import { Label } from '~/models/label.model';
import { sLabels } from '~/sample/sLabel.data';

@Injectable()
export class LabelService {
  private labels: Label[] = sLabels;

  findAll(): Label[] {
    return this.labels;
  }

  async findOneById(id: number): Promise<Label> {
    const result = await this.labels.find((label) => id === label.id);
    if (!result) {
      throw new NotFoundException();
    }
    return await result;
  }

  // get labels by user
  async getLabelsByUser(id: string): Promise<Label[]> {
    const result = await this.labels.filter((label) => id === label.userId);
    if (!result) {
      throw new NotFoundException();
    }
    return await result;
  }
}
