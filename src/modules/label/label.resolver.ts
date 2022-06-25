import { Args, ID, Int, Query, Resolver } from '@nestjs/graphql';

import { Label } from '~/models/label.model';
import { LabelService } from '~/modules/label/label.service';

@Resolver((of) => Label)
export class LabelResolver {
  constructor(private LabelService: LabelService) {}

  @Query((returns) => [Label], { nullable: 'items' })
  async labels(): Promise<Label[]> {
    return this.LabelService.findAll();
  }

  @Query(() => Label)
  async label(@Args('id', { type: () => ID }) id: string): Promise<Label> {
    return await this.LabelService.findOneById(id);
  }
}
