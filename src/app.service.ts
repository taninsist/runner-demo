import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return JSON.stringify({
      baseApi: process.env.BASE_API,
      port: process.env.PORT,
      nodeEnv: process.env.NODE_ENV,
      corsOrigins: process.env.CORS_ORIGINS,
      corsMethods: process.env.CORS_METHODS,
      corsHeaders: process.env.CORS_HEADERS,
    });
  }
}
