import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-board',
  templateUrl: "board.component.html",
  styles: [`
    nb-layout-column {
      padding: 1rem 1rem 0.75rem !important;
    }
  `]
})

export class BoardComponent implements OnInit {
  public fruits: any = ['a', 'b'];
  constructor() { }

  ngOnInit(): void {
  }

}
