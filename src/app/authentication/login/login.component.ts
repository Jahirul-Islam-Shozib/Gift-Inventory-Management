import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetailsService } from 'src/app/Service/authIfo.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private userDetailsService: UserDetailsService
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
    // console.log(this.loginForm.value);
    // this.authService.login({
    //   email: this.loginForm.value.email,
    //   password: this.loginForm.value.password,
    // });

    this.authService
      .login({
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      })
      .subscribe({
        next: (resData: any) => {
          localStorage.setItem('token', resData?.token);
          console.log(resData);
          this.userDetailsService
            .getUserDataAfterLogin(resData?.token)
            .subscribe();
          this.authService.authSuccessfully();
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}
