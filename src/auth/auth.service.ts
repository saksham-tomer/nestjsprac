import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  login() {
    return 'this is login ==>';
  }

  signup() {
    return 'this is signup ===>';
  }
}
