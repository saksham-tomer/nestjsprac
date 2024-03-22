import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//decorator is a function that adds some metadata to the class or func that it decorates

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

//we separate the logic into controllers(handling requests) and providers or services(for handling business logic)
