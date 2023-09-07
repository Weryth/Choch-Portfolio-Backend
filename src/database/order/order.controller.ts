import { Body, Controller, Inject, Post } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {

    constructor(@Inject(OrderService) private orderSer: OrderService){}

    @Post('create')
    async CreateOrderInDB(@Body() data: { email: string; order: string }){

        const createdOrder = await this.orderSer.createOrder(data);
        return createdOrder;
    }
}
