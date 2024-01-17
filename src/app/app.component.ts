import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { ImportPageComponent } from './import-page/import-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet,
    RouterLink,
    RouterLinkActive,
    LandingPageComponent,
    UsersPageComponent,
  ImportPageComponent],
})
export class AppComponent {
  title = '4System';
}
