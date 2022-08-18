import { Body, Controller, Get, Post } from '@nestjs/common'

import { CreateMessageDto } from './dtos/create-message.dto'

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {}

  @Post()
  createMessage(@Body() data: CreateMessageDto) {
    console.log(data)
  }

  @Get('/:id')
  getMessage() {}
}
