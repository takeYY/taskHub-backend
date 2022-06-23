import { Field, ID, InputType } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength } from 'class-validator';

@InputType()
export class CreateUserDto {
  @Field((type) => ID)
  @MaxLength(30)
  @IsNotEmpty()
  id: string;

  @Field((type) => String)
  @MaxLength(30)
  @IsNotEmpty()
  name: string;

  @Field((type) => String)
  @IsNotEmpty()
  @MaxLength(50)
  email: string;

  @Field((type) => String)
  @MaxLength(120)
  profile: string;

  @Field((type) => String, { nullable: true })
  avatar?: string;

  @Field((type) => Date, { nullable: true })
  createdAt?: Date;

  @Field((type) => Date, { nullable: true })
  updatedAt?: Date;
}
