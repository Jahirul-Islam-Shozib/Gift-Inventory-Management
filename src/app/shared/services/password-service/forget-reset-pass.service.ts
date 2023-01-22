import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ForgetResetPassService {
  verifiedEmail!: string;
  constructor() {}

  setVerifiedUserEmail(data: string) {
    this.verifiedEmail = data;
  }

  getVerifiedEmail() {
    return this.verifiedEmail;
  }
}
