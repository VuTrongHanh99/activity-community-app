import { InjectionToken } from '@angular/core';

export interface AppConfiguration {
  production: boolean;
  UniSystemAPI: string;
}

export const AppConfig = new InjectionToken<AppConfiguration>('@@appConfiguration');
