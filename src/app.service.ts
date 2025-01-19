import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return JSON.stringify({
      a: 123,
      // baseApi: process.env.BASE_API + 1,
      // port: process.env.PORT + 2,
      // nodeEnv: process.env.NODE_ENV + 3,
      // corsOrigins: process.env.CORS_ORIGINS || '123',
      // corsMethods: process.env.CORS_METHODS || '123',
      // corsHeaders: process.env.CORS_HEADERS || '123',
    });
  }
}
