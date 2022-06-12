import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Like {
  @Field((type) => Int)
  id: number;

  @Field((type) => Int)
  taskId: number;

  @Field((type) => ID)
  userId: string;

  @Field({ defaultValue: new Date() })
  createdAt: Date;
}
