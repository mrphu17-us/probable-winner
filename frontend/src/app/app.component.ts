import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nb-layout>
    <nb-layout-header fixed>
      <app-header></app-header>
    </nb-layout-header>
    <nb-layout-column>
      <app-board></app-board>
    </nb-layout-column>
    <nb-layout-footer fixed>
      <app-bottom></app-bottom>
    </nb-layout-footer>
  </nb-layout>
  `,
  styles: [`
    .columns nb-layout-column {
      padding: 1rem 1rem 0.75rem !important;
    }
  `]
})
export class AppComponent {
  title = 'frontend';
}
