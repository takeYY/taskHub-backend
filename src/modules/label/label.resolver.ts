import { Args, Int, Query, Resolver } from '@nestjs/graphql';

import { Label } from '~/models/label.model';
import { LabelService } from '~/modules/label/label.service';

@Resolver((of) => Label)
export class LabelResolver {
  constructor(private LabelService: LabelService) {}

  @Query((returns) => [Label], { nullable: 'items' })
  async labels() {
    return this.LabelService.findAll();
  }

  @Query(() => Label)
  async label(@Args('id', { type: () => Int }) id: number) {
    return await this.LabelService.findOneById(id);
  }
}
