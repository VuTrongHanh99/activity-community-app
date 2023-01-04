import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NonAuthGuard } from './Utils/guards/non-auth.guard';
import { AuthGuard } from './Utils/guards/auth.guard';

const routes: Routes = [
  // {
  //   path: '',
  //   component: MainComponent,
  //   canActivate: [AuthGuard],
  //   canActivateChild: [AuthGuard],
  //   children: [
      
  //   ]
  // },
  // {
  //   path: 'login',
  //   component: LoginComponent,
  //   canActivate: [NonAuthGuard]
  // },
  // {
  //   path: 'register',
  //   component: RegisterComponent,
  //   canActivate: [NonAuthGuard]
  // },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
