import { Injectable, NotFoundException } from '@nestjs/common';

import { Like } from '~/models/like.model';
import { sLike } from '~/sample/sLike.data';

@Injectable()
export class LikeService {
  private likes: Like[] = sLike;

  async findAllLikes(): Promise<Like[]> {
    return await this.likes;
  }

  async findLikeById(id: number): Promise<Like> {
    const result = await this.likes.find((like) => id === like.id);
    if (!result) {
      throw new NotFoundException();
    }
    return await result;
  }
}
