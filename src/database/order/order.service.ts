import { Inject, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Telegraf } from 'telegraf';

@Injectable()
export class OrderService {
    constructor(@Inject(PrismaClient) private prisma: PrismaClient){}

    async createOrder(orderData: { email: string, order: string }) {
        return await this.prisma.orders.create({
          data: orderData,
        });
      }
    
    async makeOrderMessageInTelegram(orderData: { email: string, order: string }){
      const bot = new Telegraf(process.env.BOT_TOKEN);

      var messageSample: string = `Заказчик с почтой ${orderData.email} предложил заказ. Сообщение: \n ${orderData.order}`;

      const chatId: string = process.env.CHAT_ID;
      await bot.telegram.sendMessage(chatId, messageSample);
    }
}
