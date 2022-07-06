import { forwardRef } from '@nestjs/common';
import { Module } from '@nestjs/common';

import { LabelModule } from '~/modules/label/label.module';
import { UserResolver } from '~/modules/user/user.resolver';
import { UserService } from '~/modules/user/user.service';

@Module({
  imports: [forwardRef(() => LabelModule)],
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UserModule {}
