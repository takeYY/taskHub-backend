import { MaxLength } from 'class-validator';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Task {
  @Field((type) => Int)
  id: number;

  @Field()
  @MaxLength(30)
  name: string;

  @Field()
  description: string;

  @Field({ defaultValue: false })
  isDone: boolean;

  @Field()
  userId: string;

  @Field()
  labelId: number;

  @Field({ defaultValue: new Date() })
  createdAt: Date;

  @Field({ defaultValue: new Date() })
  updatedAt: Date;
}
