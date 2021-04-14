import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './list-boards.component.html',
  styles: [
    `
    .board_card_linker {
      cursor: pointer;
    }
    `
  ]
})
export class ListBoardsComponent implements OnInit {
  boards$: Observable<any>;

  closed_boards = [
    {
      _id: '1',
      name: 'My Kanban 1',
      description: 'My Description 1',
      title: 'Building Great thing',
    },
  ];

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.boards$ = this.dataService.getBoards();
  }

  goToCreateBoard() {
    this.router.navigate(['boards', 'create']);
  }

  deleteBoard(board_id: string) {
    if (confirm("Deleting this project and cannot be undone.")) {
      this.dataService.deleteBoard(board_id).subscribe((res) => {
        console.log(JSON.stringify(res));
        this.router.navigate(['boards', 'list']);
        this.boards$ = this.dataService.getBoards();
      });
    }
  }
}
