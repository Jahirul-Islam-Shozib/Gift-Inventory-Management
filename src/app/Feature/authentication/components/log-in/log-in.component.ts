import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentication/auth.service';
import { AuthInfoService } from 'src/app/Service/authIfo.service';

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
    private authInfoService: AuthInfoService
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
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
          console.log(resData);
          this.authInfoService
            .getUserDataAfterLogin(resData?.token)
            .subscribe((response: any) => {
              if (response.role == 'admin') {
                this.authService.authSuccessfully();
                this.router.navigate(['/home']);
              } else if (response.role == 'SSU') {
                this.authService.authSuccessfully();
                this.router.navigate(['/inventories']);
              }
            });
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}
