import { Args, Query, Int, Resolver } from '@nestjs/graphql';
import { LabelService } from './label.service';
import { Label } from './models/label.models';

@Resolver((of) => Label)
export class LabelResolver {
  constructor(private LabelService: LabelService) {}

  @Query((returns) => [Label], { nullable: 'items' })
  async Labels() {
    return this.LabelService.findAll();
  }

  @Query(() => Label)
  async Label(@Args('id', { type: () => Int }) id: number) {
    return await this.LabelService.findOneById(id);
  }
}
