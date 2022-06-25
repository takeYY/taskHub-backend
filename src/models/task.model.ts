import { Field, ID, ObjectType } from '@nestjs/graphql';
import { MaxLength } from 'class-validator';

@ObjectType()
export class Task {
  @Field((type) => ID)
  id: string;

  @Field()
  @MaxLength(30)
  name: string;

  @Field()
  description: string;

  @Field({ defaultValue: false })
  isDone: boolean;

  @Field((type) => ID)
  userId: string;

  @Field((type) => ID)
  labelId: string;

  @Field({ defaultValue: new Date() })
  createdAt: Date;

  @Field({ defaultValue: new Date() })
  updatedAt: Date;
}
