import { Module, forwardRef } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { LabelModule } from '../label/label.module';

@Module({
  imports: [forwardRef(() => LabelModule)],
  providers: [UserService, UserResolver],
})
export class UserModule {}
