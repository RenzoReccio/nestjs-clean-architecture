import { NestFactory } from '@nestjs/core';
import { PresentationModule } from './presentation/presentation.module';
import { ValidationPipe } from '@nestjs/common';
import { GlobalExceptionHandler } from './infrastructure/global-error-handler/global-error-handler.error';

async function bootstrap() {

  const app = await NestFactory.create(PresentationModule);
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
  }));

  app.useGlobalFilters(new GlobalExceptionHandler());

  await app.listen(3000);
}
bootstrap();
