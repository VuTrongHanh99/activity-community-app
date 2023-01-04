import { Injectable ,Inject} from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { AppConfig, AppConfiguration } from 'src/configuration';
@Injectable({
  providedIn: 'root',
})
export class Account {
  constructor(@Inject(AppConfig) private readonly appConfig: AppConfiguration,private router: Router,private http : HttpClient) {}
  Login(req: any) {
    return this.http
      .post<any>(this.appConfig.UniSystemAPI + 'Account/Login', req, {})
      .pipe(
        map((z) => {
          return z;
        })
      );
  }
  ChangePass(req: any, token: any): Observable<any> {
    return this.http
      .post<any>(this.appConfig.UniSystemAPI + 'Account/ChangePassword', req, {
        headers: new HttpHeaders().set('Authorization', `Bearer ${token}`),
      })
      .pipe(
        map((z) => {
          return z;
        })
      );
  }
 

}
