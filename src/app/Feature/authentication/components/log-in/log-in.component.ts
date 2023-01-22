import { normalizePassiveListenerOptions } from '@angular/cdk/platform';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/shared/services/auth-service/auth.service';
import { AuthInfoService } from 'src/app/shared/services/auth-service/authInfo.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private authInfoService: AuthInfoService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    if (this.authService.isAuth()) {
      this.router.navigate(['inventory-dashboard']);
    }
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    this.authService
      .login({
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      })
      .subscribe({
        next: (resData: any) => {
          localStorage.setItem('token', resData?.token);
          //console.log(resData);
          if (resData) {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Login Successfull',
            });
          }
          this.authInfoService
            .getUserDataAfterLogin(resData?.token)
            .subscribe((response: any) => {
              //  console.log(response);
              localStorage.setItem(
                'loginUserDetails',
                JSON.stringify(response)
              );
              if (response.role == 'admin') {
                this.authService.authSuccessfully();
                this.router.navigate(['/inventory-dashboard']);
              } else if (response.role == 'SSU') {
                this.authService.authSuccessfully();
                this.router.navigate(['/inventory/ssu']);
              } else if (response.role == 'depot') {
                this.authService.authSuccessfully();
                this.router.navigate(['/inventory-depots/depot-wise-budget']);
              } else {
                this.router.navigate(['/auth/login']);
              }
            });
        },
        error: (error) => {
          if (error) {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Wrong Email Or Password! Please Try Again!',
            });
          }
          console.log(error);
        },
      });
  }
}
