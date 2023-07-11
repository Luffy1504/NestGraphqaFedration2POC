import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { User } from "./entities/user.entity";
import { ProjectsService } from "./projects.service";
import { Project } from "./entities/project.entity";


@Resolver(() => User)
export class UsersResolver {
    constructor (private readonly projectService: ProjectsService) {}

    @ResolveField(() => [Project])
    projects(@Parent() user: User): Project[] {
        return this.projectService.forProject(user.id)
    }
}