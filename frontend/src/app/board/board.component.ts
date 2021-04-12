import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { Observable, Subscription } from 'rxjs';
import { DataService } from '../services/data.service';
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
    private dataService: DataService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    this.subscription = activeRoute.params.subscribe(
      (params: any) => (this.board_id = params['id'])
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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
    this.router.navigate(['cards', this.board_id, 'create']);
  }

  updateCard(id: string) {
    this.router.navigate(['cards', this.board_id, id, 'update']);
  }
}
