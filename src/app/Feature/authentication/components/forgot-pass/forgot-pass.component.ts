import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForgetResetPassService } from 'src/app/Service/forget-reset-pass.service';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.scss'],
})
export class ForgotPassComponent implements OnInit {
  display: boolean = false;
  email!: string;
  otp!: string;
  api_key: any;
  constructor(
    private http: HttpClient,
    private router: Router,
    private forgetResetPassService: ForgetResetPassService
  ) {}

  ngOnInit(): void {
    this.api_key = window.localStorage.getItem('token');
  }

  onSendEmail() {
    //console.log(this.email);
    this.forgetResetPassService.setVerifiedUserEmail(this.email);
    this.display = true;
    this.onPostEmail();
  }

  onPostEmail() {
    this.http
      .post(
        'http://localhost:8080/user/forgetPassword',
        {
          email: this.email,
        },
        {
          headers: new HttpHeaders({
            Authorization: `Bearer+${this.api_key}`,
          }),
        }
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  onSendOTP() {
    console.log(this.otp);
    this.http
      .post(
        'http://localhost:8080/user/checkOtpStatus',
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
          this.router.navigate(['/reset-pass']);
        }
      });
  }
}
