import { environment } from 'environments/environment';
import { InjectionToken } from '@angular/core';
export const DOMAIN: string = environment.domain;
export const DOMAIN_TOKEN: InjectionToken<string> =
  new InjectionToken(environment.domain);