import { Inject, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ProjectService {
    constructor(@Inject(PrismaClient) private prisma: PrismaClient){}


    async findAllProject(){
        return await this.prisma.project.findMany();
    }
  
    async findOneProject(id: number){
        return await this.prisma.project.findMany({
          where: {
            id: {equals: id}
          }
        });
      }
}
