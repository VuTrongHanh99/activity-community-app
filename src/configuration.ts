import { InjectionToken } from '@angular/core';

export interface AppConfiguration {
  BASE_LOGOUT_URL: string;
  LoginWSO2: string;
  BASE_CALLBACK_URL: string;
  BASE_WSO2_URL: string;
  CLIENT_ID: string;
  production: boolean;
  UtilsUrl: string;
  TeacherUrl: string;
  PortalUrl: string;
  SupportUrl: string;
  HrmUrl: string;
  code_security: string;
  HelpUrl: string;

}

export const AppConfig = new InjectionToken<AppConfiguration>('@@appConfiguration');
