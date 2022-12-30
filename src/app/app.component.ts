import { Component } from '@angular/core';
import { ResponseLogin } from './Models/output.model/ResponseLogin';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'activity-community-app';
  public LoginResult!: ResponseLogin;
  constructor(
    public cookieService: CookieService,
  ) { }
}
