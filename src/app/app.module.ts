import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { MainComponent } from './Components/main/main.component';
import { ChangePassComponent } from './Components/pages/change-pass/change-pass.component';
import { DatePipe, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    ChangePassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxSpinnerModule,
  ],
  providers: [CookieService,DatePipe,
    { 
      provide: LocationStrategy, useClass: HashLocationStrategy 
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
