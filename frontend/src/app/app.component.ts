import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>This is App Module</h1>
    <a [routerLink]="['new_project']">Create New Project</a><br>
    <a [routerLink]="['board']">Board</a><br>
    <hr>
    <router-outlet></router-outlet>
  `,
  styles: [``]
})
export class AppComponent {
  title = 'frontend';
}
