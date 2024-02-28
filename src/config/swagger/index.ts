import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';

import { APP_INFO } from '@config/environments/public';

const swaggerConfig = (): Omit<OpenAPIObject, 'paths'> =>
  new DocumentBuilder()
    .setTitle('Example NestJS API Swagger')
    .setDescription('The Example NestJS API description')
    .setVersion(APP_INFO.VERSION)
    .build();

const setupSwagger = (app: INestApplication<any>) =>
  SwaggerModule.setup('api', app, SwaggerModule.createDocument(app, swaggerConfig()));

export default setupSwagger;
