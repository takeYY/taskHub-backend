import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MaxLength } from 'class-validator';

@ObjectType()
export class Label {
  @Field((type) => Int)
  @MaxLength(30)
  id: number;

  @Field()
  @MaxLength(10)
  name: string;

  @Field()
  @MaxLength(6)
  color: string;

  @Field({ defaultValue: true })
  isActive: boolean;

  @Field()
  userId: string;

  @Field({ defaultValue: new Date() })
  createdAt: Date;

  @Field({ defaultValue: new Date() })
  updatedAt: Date;
}
