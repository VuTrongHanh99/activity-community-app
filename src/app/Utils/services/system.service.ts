import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { AppConfig, AppConfiguration } from 'src/configuration';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  constructor(
    @Inject(AppConfig) private readonly appConfig: AppConfiguration,
    private router: Router,
    private http: HttpClient
  ) { }


  Get_danh_sach_dan_toc(token: any): Observable<any> {
    return this.http
      .get<any>(this.appConfig.UniSystemAPI + 'DanToc/Danh_sach_dan_toc', {
        headers: new HttpHeaders().set('Authorization', `Bearer ${token}`),
      })
      .pipe(
        map((z) => {
          return z;
        })
      );
  }


  Get_danh_sach_quoc_tich(token: any): Observable<any> {
    return this.http
      .get<any>(this.appConfig.UniSystemAPI + 'QuocTich/Danh_sach_quoc_tich', {
        headers: new HttpHeaders().set('Authorization', `Bearer ${token}`),
      })
      .pipe(
        map((z) => {
          return z;
        })
      );
  }

  Get_doituong_chinhsach(token: any): Observable<any> {
    return this.http
      .get<any>(this.appConfig.UniSystemAPI + 'DoiTuong/Danh_sach_doi_tuong', {
        headers: new HttpHeaders().set('Authorization', `Bearer ${token}`),
      })
      .pipe(
        map((z) => {
          return z;
        })
      );
  }

  Get_khuvuc_tuyensinh(token: any): Observable<any> {
    return this.http
      .get<any>(this.appConfig.UniSystemAPI + 'KhuVuc/Danh_sach_khu_vuc', {
        headers: new HttpHeaders().set('Authorization', `Bearer ${token}`),
      })
      .pipe(
        map((z) => {
          return z;
        })
      );
  }
  Get_tinh(token: any): Observable<any> {
    return this.http
      .get<any>(this.appConfig.UniSystemAPI + 'Tinh/Danh_sach_tinh', {
        headers: new HttpHeaders().set('Authorization', `Bearer ${token}`),
      })
      .pipe(
        map((z) => {
          return z;
        })
      );
  }

}
