import { Field, ID, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength } from 'class-validator';

@InputType()
export class CreateTaskDto {
  @Field((type) => ID)
  @MaxLength(40)
  @IsNotEmpty()
  id: string;

  @Field((type) => String)
  @MaxLength(30)
  @IsNotEmpty()
  name: string;

  @Field((type) => String, { defaultValue: null, nullable: true })
  description: string;

  @Field((type) => String, { nullable: true })
  @MaxLength(400)
  outputMemo: string;

  @Field((type) => Boolean, { defaultValue: false, nullable: true })
  isDone: boolean;

  @Field((type) => Int, { defaultValue: 0, nullable: true })
  likeCount?: number;

  @Field((type) => String)
  @IsNotEmpty()
  userId: string;

  @Field((type) => String)
  @IsNotEmpty()
  labelId: string;

  @Field((type) => Date, { nullable: true })
  createdAt?: Date;

  @Field((type) => Date, { nullable: true })
  updatedAt?: Date;
}
