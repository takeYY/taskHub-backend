import { Module } from '@nestjs/common';

import { LikeResolver } from '~/modules/like/like.resolver';
import { LikeService } from '~/modules/like/like.service';

@Module({
  providers: [LikeService, LikeResolver],
  exports: [LikeService],
})
export class LikeModule {}
