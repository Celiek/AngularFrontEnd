import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { ImportPageComponent } from '../import-page/import-page.component';
import { UsersPageComponent } from '../users-page/users-page.component';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
// import { HttpClientModule } from '@angular/common/http';
import { UserServiceService } from '../user-service.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FileUploadModule,
    NgbModule,
    FontAwesomeModule,
    AppComponent,
    RouterModule,
    LandingPageComponent,
    ImportPageComponent,
    UsersPageComponent,
  ],
  providers: [UserServiceService],
  bootstrap: []
})
export class AppModule {
  constructor(library: FaIconLibrary){}
}
