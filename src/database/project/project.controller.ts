import { Controller, Inject, Get, Param } from '@nestjs/common';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
    constructor(@Inject(ProjectService) private projectSer: ProjectService){}

    @Get('getone/:id')
    async TakeOneProject(@Param('id') id: string){
        try{
            var idNum:  number =+ id
            return this.projectSer.findOneProject(idNum);
            
        } catch(ex){
            return ex;
        }
        
    }

    @Get('getall')
    async TakeAllProject(){
        return this.projectSer.findAllProject();

    }

}
