import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  // 从环境变量获取 CORS 配置
  const corsOrigins =
    configService.get<string>('CORS_ORIGINS')?.split(',') || [];
  const corsMethods =
    configService.get<string>('CORS_METHODS')?.split(',') || [];
  const corsHeaders =
    configService.get<string>('CORS_HEADERS')?.split(',') || [];

  app.enableCors({
    origin: corsOrigins,
    methods: corsMethods,
    credentials: true,
    allowedHeaders: corsHeaders,
    exposedHeaders: corsHeaders,
  });

  const BASE_API = configService.get<string>('BASE_API');

  app.setGlobalPrefix(BASE_API || 'api');

  // 添加进程信号处理
  process.on('SIGTERM', async () => {
    await app.close();
    process.exit(0);
  });

  process.on('SIGINT', async () => {
    await app.close();
    process.exit(0);
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
