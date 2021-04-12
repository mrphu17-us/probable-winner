import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { Observable, Subscription } from 'rxjs';
import { DataService } from '../services/data.service';
import { NewCardComponent } from './new-card.component';
import { UpdateCardComponent } from './update-card.component';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  public cardsTODO$: Observable<any>;
  public cardsInprogress$: Observable<any>;
  public cardsDone$: Observable<any>;
  public subscription: Subscription;
  public board_id: String;

  constructor(
    private dialogService: NbDialogService,
    private dataService: DataService,
    private activeRoute: ActivatedRoute
  ) {
    this.subscription = activeRoute.params.subscribe(
      (params: any) => (this.board_id = params['id'])
    );
  }

  ngOnInit(): void {
    this.cardsTODO$ = this.dataService.getCards(this.board_id, 'TODO');
    this.cardsInprogress$ = this.dataService.getCards(
      this.board_id,
      'Inpgress'
    );
    this.cardsDone$ = this.dataService.getCards(this.board_id, 'Done');
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
