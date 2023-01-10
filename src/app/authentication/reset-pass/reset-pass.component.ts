import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  RequiredValidator,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.scss'],
})
export class ResetPassComponent implements OnInit {
  resetPassForm!: FormGroup;
  constructor() {}

  ngOnInit(): void {
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
  }
}
