import { NotFoundException, ValidationPipe } from '@nestjs/common';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Like } from '~/models/like.model';
import { CreateLikeDto } from '~/modules/like/dto/create-like.dto';
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

  @Mutation(() => Like)
  async createLike(
    @Args('like', ValidationPipe) createLikeDto: CreateLikeDto,
  ): Promise<Like> {
    try {
      return await this.likeService.createLike(createLikeDto);
    } catch {
      throw new NotFoundException();
    }
  }
}
