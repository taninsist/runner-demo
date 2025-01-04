import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return JSON.stringify({
      baseApi: process.env.BASE_API,
      port: process.env.PORT,
      nodeEnv: process.env.NODE_ENV,
    });
  }
}
