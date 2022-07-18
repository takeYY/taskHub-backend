import { NotFoundException, ValidationPipe } from '@nestjs/common';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Label } from '~/models/label.model';
import { CreateLabelDto } from '~/modules/label/dto/create-label.dto';
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

  @Mutation(() => Label)
  async createLabel(
    @Args('label', ValidationPipe) createLabelDto: CreateLabelDto,
  ): Promise<Label> {
    try {
      return await this.LabelService.createLabel(createLabelDto);
    } catch {
      throw new NotFoundException();
    }
  }
}
