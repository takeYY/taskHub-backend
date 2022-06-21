import { Module } from '@nestjs/common';
import { LabelService } from './label.service';
import { LabelResolver } from './label.resolver';

@Module({
  providers: [LabelService, LabelResolver],
})
export class LabelModule {}
