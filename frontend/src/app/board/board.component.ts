import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { NewCardComponent } from './new-card.component';
import { UpdateCardComponent } from './update-card.component';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  public cards$: Observable<any>;

  constructor(
    private dialogService: NbDialogService,
    private dataService: DataService
  ) {}
  public fruits: any = [
    { title: 'this is title', name: 'Phu' },
    { title: 'this is title', name: 'Sto' },
    { title: 'this is title', name: 'Sto' },
    { title: 'this is title', name: 'Sto' },
    { title: 'this is title', name: 'Sto' },
  ];
  ngOnInit(): void {
    this.cards$ = this.dataService.getCards();
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
