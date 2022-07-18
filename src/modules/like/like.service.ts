import { Injectable, NotFoundException } from '@nestjs/common';
import { FieldValue } from 'firebase-admin/firestore';

import { firestore } from '~/app.service';
import { Like } from '~/models/like.model';
import { CreateLikeDto } from '~/modules/like/dto/create-like.dto';

@Injectable()
export class LikeService {
  private likeRef = firestore.collection('likes');
  private taskRef = firestore.collection('tasks');

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

  async createLike(createLikeDto: CreateLikeDto): Promise<Like> {
    const newLike = {
      taskId: createLikeDto.taskId,
      userId: createLikeDto.userId,
      createdAt: createLikeDto.createdAt || new Date(),
    };
    let docRef: FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>;
    try {
      await firestore.runTransaction(async (t) => {
        await this.taskRef.doc(createLikeDto.taskId).update({
          likeCount: FieldValue.increment(1),
        });
        docRef = await this.likeRef.add(newLike);
      });
    } catch {
      throw new NotFoundException();
    }

    const result = {
      id: docRef.id,
      ...newLike,
    };

    return result;
  }
}
