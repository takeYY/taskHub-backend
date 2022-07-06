import { Injectable, NotFoundException } from '@nestjs/common';

import { firestore } from '~/app.service';
import { Like } from '~/models/like.model';

@Injectable()
export class LikeService {
  private likeRef = firestore.collection('likes');

  async findAllLikes(): Promise<Like[]> {
    const snapshot = await this.likeRef.get();
    const likeList = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        taskId: data.taskId,
        userId: data.userId,
        createdAt: data.createdAt,
      };
    });

    return likeList;
  }

  async findLikeById(id: string): Promise<Like> {
    // TODO: likeRefのwhereで直接データを絞り込むようにする
    const likes = await this.findAllLikes();
    const result = await likes.find((like) => id === like.id);
    if (!result) {
      throw new NotFoundException();
    }
    return await result;
  }

  async findTaskLikedByUserId(taskId: string, userId: string): Promise<Like> {
    // TODO: likeRefのwhereで直接データを絞り込むようにする
    const likes = await this.findAllLikes();
    const result = likes.find((like) => {
      return taskId === like.taskId && userId === like.userId;
    });

    if (!result) {
      throw new NotFoundException();
    }
    return result;
  }
}
