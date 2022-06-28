import { Field, ID, ObjectType } from '@nestjs/graphql';
import { MaxLength } from 'class-validator';

@ObjectType()
export class User {
  @Field((type) => ID)
  @MaxLength(40)
  id: string;

  @Field()
  @MaxLength(30)
  name: string;

  @Field()
  @MaxLength(50)
  email: string;

  @Field()
  @MaxLength(120)
  profile: string;

  @Field({ nullable: true })
  avatar: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
