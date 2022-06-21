import { Injectable, NotFoundException } from '@nestjs/common';
import { sLike } from 'src/sample/sLike.data';
import { Like } from '../../models/like.model';

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
