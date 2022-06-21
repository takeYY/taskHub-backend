import { Args, Query, Int, Resolver } from '@nestjs/graphql';
import { LabelService } from './label.service';
import { Label } from '../models/label.model';

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
