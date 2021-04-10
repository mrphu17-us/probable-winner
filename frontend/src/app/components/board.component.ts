import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <p> board component </p>
  `,
  styles: [`
  mat-grid-tile {
    background: lightblue;
  }`]
})

export class BoardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
