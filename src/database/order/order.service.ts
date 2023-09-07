import { Inject, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class OrderService {
    constructor(@Inject(PrismaClient) private prisma: PrismaClient){}

    async createOrder(orderData: { email: string, order: string }) {
        return await this.prisma.orders.create({
          data: orderData,
        });
      }
}
