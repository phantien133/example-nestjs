import { NestFactory } from '@nestjs/core';

import setupSwagger from '@config/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  setupSwagger(app);
  await app.listen(3000);
}
bootstrap();
