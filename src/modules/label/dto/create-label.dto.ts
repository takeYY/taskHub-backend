import { Field, ID, InputType } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength } from 'class-validator';

@InputType()
export class CreateLabelDto {
  @Field((type) => ID)
  @MaxLength(40)
  @IsNotEmpty()
  id: string;

  @Field((type) => String)
  @MaxLength(10)
  @IsNotEmpty()
  name: string;

  @Field((type) => String)
  @MaxLength(6)
  @IsNotEmpty()
  color: string;

  @Field((type) => Boolean, { defaultValue: true })
  isActive: boolean;

  @Field((type) => ID)
  @MaxLength(40)
  @IsNotEmpty()
  userId: string;

  @Field((type) => Date, { nullable: true })
  createdAt?: Date;

  @Field((type) => Date, { nullable: true })
  updatedAt?: Date;
}
