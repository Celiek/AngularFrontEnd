import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import {provideProtractorTestingSupport} from '@angular/platform-browser';
import  routes  from './routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideProtractorTestingSupport()]
};
