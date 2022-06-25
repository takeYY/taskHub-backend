import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  Post,
} from '@nestjs/common';

import { AppService } from '~/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  createSample(@Body('admin_key') key) {
    if (key !== process.env.ADMIN_KEY) {
      throw new ForbiddenException();
    }

    return this.appService.createSamples();
  }
}
