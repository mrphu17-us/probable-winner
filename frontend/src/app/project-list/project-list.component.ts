import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';



@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styles: [
  ]
})
export class ProjectListComponent implements OnInit {

  boards$: Observable<any>;
  boards = [
    { _id: '1', name: 'My Kanban 1', description: 'My Description 1', title: 'Building Great thing' },
    { _id: '1', name: 'My Kanban 2', description: 'My Description 2', title: 'Building Great thing' },
    { _id: '1', name: 'My Kanban 3', description: 'My Description 3', title: 'Building Great thing' },
    { _id: '1', name: 'My Kanban 3', description: 'My Description 3', title: 'Building Great thing' },
    { _id: '1', name: 'My Kanban 2', description: 'My Description 2', title: 'Building Great thing' },
  ];

  closed_boards = [
    { _id: '1', name: 'My Kanban 1', description: 'My Description 1', title: 'Building Great thing' },
  ]


  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.boards$ = this.dataService.getBoards();
  }

  listClicked(board) {
    console.log("clicked on", board);
    this.router.navigate(['/board', '1']); // for testing purpose, will be replaced below
    // this.router.navigate(['/board', board._id]); // UNCOMMENT after card api is done
  }
}
