import { HttpStatus, Injectable } from '@nestjs/common';

import { IResponse } from '../types';


@Injectable()
export class AppService {
  public async checkAlive(): Promise<IResponse<{ alive: true }>> {
    return {
      status: HttpStatus.OK,
      data: {
        alive: true,
      },
    };
  }
}
