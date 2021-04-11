import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { NewCardComponent } from './new-card.component';
@Component({
  selector: 'app-board',
  templateUrl: "./board.component.html",
  styles: [`
    nb-layout-column {
      padding: 1rem 1rem 0.75rem !important;
    }

    button { float: right; }
  `]
})

export class BoardComponent implements OnInit {
  constructor(private dialogService: NbDialogService) { }
  public fruits: any = ['a', 'b'];
  ngOnInit(): void {
  }

  addNewCard(type: string) {
    this.dialogService.open(NewCardComponent, {
      context: {
        // title: 'This is a title passed to the dialog component',
      },
    });
  }

}
