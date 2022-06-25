import { Args, ID, Query, Resolver } from '@nestjs/graphql';

import { Like } from '~/models/like.model';
import { LikeService } from '~/modules/like/like.service';

@Resolver((of) => Like)
export class LikeResolver {
  constructor(private likeService: LikeService) {}

  @Query(() => [Like], { nullable: 'items' })
  async likes(): Promise<Like[]> {
    return await this.likeService.findAllLikes();
  }

  @Query(() => Like)
  async like(@Args('id', { type: () => ID }) id: string): Promise<Like> {
    return await this.likeService.findLikeById(id);
  }
}
