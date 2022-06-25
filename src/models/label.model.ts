import { Field, ID, ObjectType } from '@nestjs/graphql';
import { MaxLength } from 'class-validator';

@ObjectType()
export class Label {
  @Field((type) => ID)
  @MaxLength(30)
  id: string;

  @Field()
  @MaxLength(10)
  name: string;

  @Field()
  @MaxLength(6)
  color: string;

  @Field({ defaultValue: true })
  isActive: boolean;

  @Field((type) => ID)
  userId: string;

  @Field({ defaultValue: new Date() })
  createdAt: Date;

  @Field({ defaultValue: new Date() })
  updatedAt: Date;
}
