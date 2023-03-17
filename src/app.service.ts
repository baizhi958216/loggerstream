import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
    <div style="
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;"
    >
      <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
      <p>Senser Logger live data via http<p>
    </div>`;
  }
}
