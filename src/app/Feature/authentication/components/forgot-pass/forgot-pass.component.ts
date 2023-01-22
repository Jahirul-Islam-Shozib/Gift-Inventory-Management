import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { ForgetResetPassService } from 'src/app/shared/services/password-service/forget-reset-pass.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.scss'],
  providers: [MessageService],
})
export class ForgotPassComponent implements OnInit {
  display: boolean = false;
  email!: string;
  otp!: string;
  api_key: any;
  constructor(
    private http: HttpClient,
    private router: Router,
    private forgetResetPassService: ForgetResetPassService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.api_key = window.localStorage.getItem('token');
  }

  onSendEmail() {
    this.forgetResetPassService.setVerifiedUserEmail(this.email);
    this.display = true;
    this.onPostEmail();
    this.email = '';
  }

  onPostEmail() {
    const forgetPassURL: string = `${environment.API_END_POINT}/user/forgetPassword`;
    this.http
      .post(
        forgetPassURL,
        {
          email: this.email,
        },
        {
          headers: new HttpHeaders({
            Authorization: `Bearer+${this.api_key}`,
          }),
        }
      )
      .subscribe({
        next: (response) => {
          if (response) {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'An OTP Has Been Sent To Your Email Address.',
            });
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  onSendOTP() {
    const sendOtpURL: string = `${environment.API_END_POINT}/user/checkOtpStatus`;
    this.http
      .post(
        sendOtpURL,
        {
          email: this.email,
          otp: this.otp,
        },
        {
          headers: new HttpHeaders({
            Authorization: `Bearer+${this.api_key}`,
          }),
        }
      )
      .subscribe((response) => {
        console.log(response);

        if (response == true) {
          this.router.navigate(['/auth/reset-pass']);
        }
      });
  }
}
