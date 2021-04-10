import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom',
  template: `
    <p>
      bottom works!
    </p>
  `,
  styles: [
  ]
})
export class BottomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
