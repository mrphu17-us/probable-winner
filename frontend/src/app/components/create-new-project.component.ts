import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-new-project',
  template: `
  <form>
    <h1>Create a New Project</h1>
    <hr>
    <label for="board_name">Board Name</label><br>
    <input type="text" value="kanban" placeholder="Write your Board name here..."/><br>
    <br>
    <label for="description">Desription (Optional)</label><br>
    <textarea cols=60 rows=10> placeholder="This is optional description area"</textarea><br>
    <br>
    <hr>
    <button>Create project</button>
  </form>
  `,
  styles: [
  ]
})
export class CreateNewProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
