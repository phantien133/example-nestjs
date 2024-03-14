import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';

import { APP_INFO } from '@config/environments/public';

const swaggerConfig = (): Omit<OpenAPIObject, 'paths'> =>
  new DocumentBuilder()
    .setTitle('Example NestJS Api Swagger')
    .setDescription('The Example NestJS Api description')
    .setVersion(APP_INFO.VERSION)
    .addTag('API')
    .build();

const setupSwagger = (app: INestApplication<any>) =>
  SwaggerModule.setup('api', app, SwaggerModule.createDocument(app, swaggerConfig()));

export default setupSwagger;
