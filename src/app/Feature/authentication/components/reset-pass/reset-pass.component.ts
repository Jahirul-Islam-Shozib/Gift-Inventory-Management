import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgetResetPassService } from 'src/app/shared/services/password-service/forget-reset-pass.service';
import { environment } from 'src/environments/environment';

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
      newPassword: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl(null, [Validators.required]),
    });
  }

  onChangePass() {
    var new_Password = this.resetPassForm.value.newPassword;
    var confirm_Password = this.resetPassForm.value.confirmPassword;

    if (new_Password != confirm_Password) {
      return true;
    }
    return false;
  }
  onResetPass() {
    // console.log(this.resetPassForm.value);
    const resetPassURL: string = `${environment.API_END_POINT}/user/resetPassword`;

    this.http
      .post(
        resetPassURL,
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
          this.router.navigate(['/auth/login']);
        }
      });
  }
}
