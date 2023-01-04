import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppConfig, AppConfiguration } from 'src/configuration';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(@Inject(AppConfig) private readonly appConfig: AppConfiguration, private router: Router, private http: HttpClient) { }

  GetAll(ID_sv: string,token: any): Observable<any> {
    return this.http.get<any>(this.appConfig.UniSystemAPI + 'SinhHoatCongDong/Load?ID_sv='+ID_sv, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
    }).pipe(map(z => { return z }))
  }
  Insert(req:any,token: any): Observable<any> {
    return this.http.post<any>(this.appConfig.UniSystemAPI + 'SinhHoatCongDong/Insert',req, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
    }).pipe(map(z => { return z }))
  } 
  Update(req:any,token: any): Observable<any> {
    return this.http.post<any>(this.appConfig.UniSystemAPI + 'SinhHoatCongDong/Update',req, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
    }).pipe(map(z => { return z }))
  }

  Delete(ID: string,token: any): Observable<any> {
    return this.http.get<any>(this.appConfig.UniSystemAPI + 'SinhHoatCongDong/Delete?ID='+ID, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
    }).pipe(map(z => { return z }))
  }
}