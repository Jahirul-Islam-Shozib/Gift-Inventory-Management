import { Component } from '@angular/core';
import { AuthService } from './Service/auth-service/auth.service';
import { AuthInfoService } from './Service/authInfo.service';

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
    this.reloadPage();
  }
  reloadPage() {
    // setTimeout(() => {
    //   window.location.reload();
    // }, 100);
    this.authInfoService
      .getUserDataAfterLogin(this.api_key)
      .subscribe((response: any) => {
        console.log(response);
        this.authService.authChange.next(true);
      });
    //window.location.reload();
  }
}
