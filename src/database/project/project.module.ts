import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { PrismaClient } from '@prisma/client';
import { ProjectService } from './project.service';

@Module({
  controllers: [ProjectController],
  providers:[
    {
    provide: PrismaClient,
    useValue: new PrismaClient(),
    },
    ProjectService,]
})
export class ProjectModule {}
