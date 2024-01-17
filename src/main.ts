import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent,appConfig);

// const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);

// bootstrapApplication(AppComponent,
//   {
//     providers : [
//       provideProtractorTestingSupport(),
//       provideRouter(routeConfig)
//     ]
//   }).catch(err => console.error(err));