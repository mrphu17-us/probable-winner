import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <h4>This is App Module</h4>
    <a [routerLink]="['new_project']">Create New Project</a><br>
    <a [routerLink]="['board']">Board</a><br>
  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
