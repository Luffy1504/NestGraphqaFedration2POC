import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateProjectInput {
  @Field()
  id: string;

  @Field()
  projectName: string;

  @Field()
  teamCount: number;
}
