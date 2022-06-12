import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { LikeService } from './like.service';
import { Like } from './models/like.model';

@Resolver((of) => Like)
export class LikeResolver {
  constructor(private likeService: LikeService) {}

  @Query(() => [Like], { nullable: 'items' })
  async likes(): Promise<Like[]> {
    return await this.likeService.findAllLikes();
  }

  @Query(() => Like)
  async like(@Args('id', { type: () => Int }) id: number): Promise<Like> {
    return await this.likeService.findLikeById(id);
  }
}
