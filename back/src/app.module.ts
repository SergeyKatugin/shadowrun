import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { CharacterController } from './character.controller';
import { LOGGER } from './constants';
import { AppService, CharacterService, DummyLoggerService, LoggerService } from './services';


@Module({
  imports: [
    ConfigModule.forRoot(),
  ],
  controllers: [
    AppController,
    CharacterController,
  ],
  providers: [
    AppService,
    CharacterService,
    {
      provide: LOGGER,
      useFactory: (configService: ConfigService) => {
        const environment = configService.get('MODE');

        return environment === 'prod'
          ? new DummyLoggerService()
          : new LoggerService();
      },
      inject: [ ConfigService ],
    },
  ],
})
export class AppModule {}
