import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  RequiredValidator,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ForgetResetPassService } from 'src/app/Service/forget-reset-pass.service';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.scss'],
})
export class ResetPassComponent implements OnInit {
  resetPassForm!: FormGroup;
  email!: string;
  api_key: any;
  constructor(
    private forgetResetPassService: ForgetResetPassService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.api_key = window.localStorage.getItem('token');
    this.email = this.forgetResetPassService.getVerifiedEmail();
    this.initForm();
  }

  initForm() {
    this.resetPassForm = new FormGroup({
      newPassword: new FormControl(null, Validators.required),
      confirmPassword: new FormControl(null, Validators.required),
    });
  }
  onResetPass() {
    //console.log(this.newPass, this.confirmPass);
    console.log(this.resetPassForm.value);

    this.http
      .post(
        'http://localhost:8080/user/resetPassword',
        {
          email: this.email,
          password: this.resetPassForm.value.confirmPassword,
        },
        {
          headers: new HttpHeaders({
            Authorization: `Bearer+${this.api_key}`,
          }),
        }
      )
      .subscribe((response) => {
        console.log(response);
        if (response) {
          this.router.navigate(['/login']);
        }
      });
  }
}
