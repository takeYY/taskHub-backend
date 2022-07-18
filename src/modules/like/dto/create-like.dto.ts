import { Field, ID, InputType } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength } from 'class-validator';

@InputType()
export class CreateLikeDto {
  @Field((type) => ID)
  @MaxLength(40)
  @IsNotEmpty()
  id: string;

  @Field((type) => String)
  @IsNotEmpty()
  taskId: string;

  @Field((type) => String)
  @IsNotEmpty()
  userId: string;

  @Field((type) => Date, { nullable: true })
  createdAt?: Date;
}
