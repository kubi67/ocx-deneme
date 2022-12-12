import { ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost, NestFactory, Reflector } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { resolve } from 'path';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './libs/exception-filters/all-exception-filters';
import { LoggerMiddleware } from './libs/logger/logger.service';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionFilter(httpAdapter));
  app.setGlobalPrefix('/api/v1');
  app.useStaticAssets(resolve('./src/public'));
  app.setBaseViewsDir(resolve('./src/views'));
  app.setViewEngine('hbs');
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  //app.useGlobalGuards(new RoleGuard(new Reflector));

  const config = new DocumentBuilder()
    .setTitle('OCX CRM BACKEND DB Service')
    .setDescription('BACKEND ENDPOINTS ')
    .setLicense('COPYRIGHT Overcodex', 'OVERCODEX')
    .setVersion('1.1')
    .addTag('Api v1 Endpointss')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/documents', app, document);
  await app.listen(process.env.PORT);
}
bootstrap();
