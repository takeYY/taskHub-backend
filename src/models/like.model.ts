import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Like {
  @Field((type) => ID)
  id: string;

  @Field((type) => ID)
  taskId: string;

  @Field((type) => ID)
  userId: string;

  @Field({ defaultValue: new Date() })
  createdAt: Date;
}
