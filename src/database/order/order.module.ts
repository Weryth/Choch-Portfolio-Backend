import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { PrismaClient } from '@prisma/client';
import { OrderService } from './order.service';

@Module({
  controllers: [OrderController],
  providers:[
    {
    provide: PrismaClient,
    useValue: new PrismaClient(),
    },
    OrderService,]
})
export class OrderModule {}
