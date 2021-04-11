import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { NewCardComponent } from './new-card.component';
import { UpdateCardComponent } from './update-card.component';
@Component({
  selector: 'app-board',
  templateUrl: "./board.component.html",
  styles: [`
    nb-layout-column {
      padding: 1rem 1rem 0.75rem !important;
    }

    button { float: right; }

    .box {
      overflow: hidden; color: black; 
      border-radius: 0.25rem; 
      border: 0.0625rem solid #e4e9f2; 
      padding: 5px; width: 100%;
      background-color: #e4e9f2;
    }
  `]
})

export class BoardComponent implements OnInit {
  constructor(private dialogService: NbDialogService) { }
  public fruits: any = [{title: "this is title", name: "Phu"}, 
  {title: "this is title", name: "Sto"},
  {title: "this is title", name: "Sto"},
  {title: "this is title", name: "Sto"},
  {title: "this is title", name: "Sto"}];
  ngOnInit(): void {
  }

  addNewCard(type: string) {
    this.dialogService.open(NewCardComponent, {
      context: {
        // title: 'This is a title passed to the dialog component',
      },
    });
  }

  updateCard(id: string) {
    this.dialogService.open(UpdateCardComponent, {
      context: {
        // title: 'This is a title passed to the dialog component',
      },
    });
  }

}
