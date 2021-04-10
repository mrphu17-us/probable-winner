import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-board',
  template: `
  <nb-layout>
    <nb-layout-column>
      <nb-card size="medium">
        <nb-card-header>
          TODO
        </nb-card-header>
        <nb-list>
          <nb-list-item *ngFor="let fruit of fruits">
            {{ fruit }}
          </nb-list-item>
        </nb-list>
      </nb-card>
    </nb-layout-column>
    <nb-layout-column>
      <nb-card size="medium">
        <nb-card-header>
          In Progress
        </nb-card-header>
        <nb-list>
          <nb-list-item *ngFor="let fruit of fruits">
            {{ fruit }}
          </nb-list-item>
        </nb-list>
      </nb-card>
    </nb-layout-column>
    <nb-layout-column>
      <nb-card size="medium">
        <nb-card-header>
          Done
        </nb-card-header>
        <nb-list>
          <nb-list-item *ngFor="let fruit of fruits">
            {{ fruit }}
          </nb-list-item>
        </nb-list>
      </nb-card>
    </nb-layout-column>
  </nb-layout>
  `,
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
