import { Module } from '@nestjs/common';
import { DatabaseController } from './database.controller';
import { DatabaseService } from './database.service';
import { PrismaClient } from '@prisma/client';
import { OrderModule } from './order/order.module';
import { ProjectModule } from './project/project.module';

@Module({
  controllers: [DatabaseController],
  providers: [DatabaseService,
    {
    provide: PrismaClient,
    useValue: new PrismaClient(),
    },
  ],
  exports: [DatabaseModule],
  imports: [OrderModule, ProjectModule]
})
export class DatabaseModule {}
