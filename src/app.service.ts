import { Injectable } from '@nestjs/common';

import * as admin from 'firebase-admin';

admin.initializeApp();
export const firestore = admin.firestore();

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
