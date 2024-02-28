import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from '@config/database/database.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

// config modules
// modules

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
