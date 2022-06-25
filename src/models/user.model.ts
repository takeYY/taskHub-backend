import { Field, ID, ObjectType } from '@nestjs/graphql';
import { MaxLength, MinLength } from 'class-validator';

// ObjectTypeデコレータを使用することで、定義したmodelを元にschemaが自動生成される
@ObjectType()
export class User {
  @Field((type) => ID)
  @MaxLength(30)
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
