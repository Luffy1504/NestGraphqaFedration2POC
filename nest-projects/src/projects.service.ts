import { Injectable } from '@nestjs/common';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectsService {

  private readonly projects: Project[] = [];

  create(createProjectInput: CreateProjectInput) {
    this.projects.push(createProjectInput);
    return createProjectInput;
  }

  findAll() {
    return this.projects;
  }

  findOne(id: string) {
    return this.projects.find(project => project.id === id);
  }

  forProject(projectId: string) {
     return this.projects.filter((project) => project.id === projectId )
  }

  update(id: number, updateProjectInput: UpdateProjectInput) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
