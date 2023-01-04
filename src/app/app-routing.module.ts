
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DangNhapComponent } from './pages/dang-nhap/dang-nhap.component';
import { XacNhanComponent } from './pages/xac-nhan/xac-nhan.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AuthGuard } from './Utils/guards/auth.guard';
import { NonAuthGuard } from './Utils/guards/non-auth.guard';
import { StudentDeclarationComponent } from './pages/student-declaration/student-declaration.component';
import { PortalComponent } from './pages/portal/portal.component';
const routes: Routes = [
  {
    path: 'admin',
    component: MainComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'sinh-hoat-cong-dong',
        component: AdminComponent,
      },
    ],
  },
  {
    path: '',
    component: PortalComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'sinh-hoat-cong-dong',
        component: StudentDeclarationComponent,
      },
    ],
  },

  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NonAuthGuard],
  },
  {
    path: 'dang-nhap',
    component: DangNhapComponent,
    canActivate: [NonAuthGuard],
  },

  {
    path: 'xac-nhan',
    component: XacNhanComponent,
    canActivate: [NonAuthGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [NonAuthGuard],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule, HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
