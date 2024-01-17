import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.css',
  standalone: true,
})
export class UsersPageComponent {
  constructor(library: FaIconLibrary){}
}
