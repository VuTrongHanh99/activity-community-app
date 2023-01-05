import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePipe, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BaseComponent } from './Components/base/base.component';
import { MainComponent } from './pages/main/main.component';
import { AdminComponent } from './pages/admin/admin.component';
import { DangNhapComponent } from './pages/dang-nhap/dang-nhap.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { XacNhanComponent } from './pages/xac-nhan/xac-nhan.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PortalComponent } from './pages/portal/portal.component';
import { StudentDeclarationComponent } from './pages/student-declaration/student-declaration.component';
import { PortalFooterComponent } from './pages/portal/portal-footer/portal-footer.component';
import { PortalHeaderComponent } from './pages/portal/portal-header/portal-header.component';
import { PortalKetQuaComponent } from './pages/portal/portal-ket-qua/portal-ket-qua.component';
import { PortalMenuSidebarComponent } from './pages/portal/portal-menu-sidebar/portal-menu-sidebar.component';
import { PortalUserDropdownComponent } from './pages/portal/portal-header/portal-user-dropdown/portal-user-dropdown.component';
import { ChatBotComponent } from './pages/chat-bot/chat-bot.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgSelectModule } from '@ng-select/ng-select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './pages/main/footer/footer.component';
import { HeaderComponent } from './pages/main/header/header.component';
import { MenuSidebarComponent } from './pages/main/menu-sidebar/menu-sidebar.component';



@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    MainComponent,
    AdminComponent,
    DangNhapComponent,
    LoginComponent,
    RegisterComponent,
    XacNhanComponent,
    PortalComponent,
    StudentDeclarationComponent,
    PortalFooterComponent,
    PortalHeaderComponent,
    PortalKetQuaComponent,
    PortalMenuSidebarComponent,
    PortalUserDropdownComponent,
    ChatBotComponent,
    FooterComponent,
    HeaderComponent,
    MenuSidebarComponent,
  ],
  imports: [
    NgxPaginationModule,
    CKEditorModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    //DataTablesModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    CKEditorModule,
    NgMultiSelectDropDownModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
    NgbModule,
    HttpClientModule,
    FormsModule,
    NgSelectModule,
    Ng2SearchPipeModule,
  ],
  providers: [CookieService,DatePipe,
    { 
      provide: LocationStrategy, useClass: HashLocationStrategy 
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
