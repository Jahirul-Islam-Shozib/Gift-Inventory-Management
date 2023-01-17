import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth-service/auth.service';
import { AuthInfoService } from './shared/services/auth-service/authInfo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'access_authentication';
  api_key: any;
  constructor(
    private authInfoService: AuthInfoService,
    private authService: AuthService
  ) {}
  ngOnInit() {
    this.api_key = window.localStorage.getItem('token');
    if (this.api_key) {
      this.reloadPage();
    }
  }
  reloadPage() {
    this.authInfoService
      .getUserDataAfterLogin(this.api_key)
      .subscribe((response: any) => {
        //console.log(response);
        if (response) {
          this.authService.authChange.next(true);
        }
      });
  }
}
