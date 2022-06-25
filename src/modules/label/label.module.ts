import { Module } from '@nestjs/common';

import { LabelResolver } from '~/modules/label/label.resolver';
import { LabelService } from '~/modules/label/label.service';

@Module({
  providers: [LabelService, LabelResolver],
  exports: [LabelService],
})
export class LabelModule {}
