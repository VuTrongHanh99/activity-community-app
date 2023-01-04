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
export class AdminDeclarationService {
  constructor(@Inject(AppConfig) private readonly appConfig: AppConfiguration, private router: Router, private http: HttpClient) { }

  Count(token: any): Observable<any> {
    return this.http.get<any>(this.appConfig.UniSystemAPI + 'SinhHoatCongDongQuanTri/Count', {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
    }).pipe(map(z => { return z }))
  }
  CounFilter(req:any,token: any): Observable<any> {
    return this.http.post<any>(this.appConfig.UniSystemAPI + 'SinhHoatCongDongQuanTri/CountFilter',req, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
    }).pipe(map(z => { return z }))
  } 
  Load(req:any,token: any): Observable<any> {
    return this.http.post<any>(this.appConfig.UniSystemAPI + 'SinhHoatCongDongQuanTri/Load',req, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
    }).pipe(map(z => { return z }))
  }

  UpdateDiem(req: any,token: any): Observable<any> {
    return this.http.post<any>(this.appConfig.UniSystemAPI + 'SinhHoatCongDongQuanTri/UpdateDiem',req, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
    }).pipe(map(z => { return z }))
  }
  UpdateStatus(req: any,token: any): Observable<any> {
    return this.http.post<any>(this.appConfig.UniSystemAPI + 'SinhHoatCongDongQuanTri/UpdateStatus',req, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
    }).pipe(map(z => { return z }))
  }
}