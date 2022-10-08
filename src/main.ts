import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { settings } from './settings';

const PORT = settings.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
}

bootstrap();
