import { Controller, Get } from '@nestjs/common';

import { AppService } from './services';
import { IResponse } from './types';


@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) {
  }

  @Get()
  public async checkAlive(): Promise<IResponse<{ alive: true }>> {
    return this.appService.checkAlive();
  }
}
