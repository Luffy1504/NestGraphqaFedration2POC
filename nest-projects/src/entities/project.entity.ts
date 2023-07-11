import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from './user.entity';

@ObjectType()
export class Project {
  @Field(() => ID)
  id: string;

  @Field()
  projectName: string;

  @Field()
  teamCount : number;

  @Field(() => User)
  user?: User;
}
