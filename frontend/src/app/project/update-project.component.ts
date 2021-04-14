import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styles: [
    `
    div { margin-top: 1%; }
    
    div.back_button {
      margin-top: 0;
      margin-bottom: 1%;
    }
    `

  ]
})
export class UpdateProjectComponent implements OnInit {
  createdBoard$: Observable<any>;
  myForm: FormGroup;
  loading: boolean = false;
  subscription: Subscription;
  board: any;

  constructor(
    private formBuilder: FormBuilder, private dataService: DataService, private router: Router, private activateRoute: ActivatedRoute) {
    this.subscription = this.activateRoute.paramMap
      .pipe(
        map(() => window.history.state)
      )
      .subscribe(
        (params: any) => {
          this.board = params.board;
          console.log(this.board);
        }
      );
  }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      title: [this.board?.title, [Validators.required, this.exampleValidator]],
      description: [this.board?.description, []],
    })
    this.myForm.statusChanges.subscribe((data: any) => console.log(data));
  }

  onDestroy() {
    this.subscription.unsubscribe()
  }

  onSubmit(): void {
    this.loading = true;
    let data = {
      board_id: this.board?._id,
      ...this.myForm.value,
    };
    console.log(data);
    //after submit create a new project
    this.dataService.updateBoard(data).subscribe((res) => {
      console.log(JSON.stringify(res));
      this.router.navigate(['projects', 'list']);
    });
  }

  // --------- EXTRA VALIDATORS --------------
  exampleValidator(control: FormControl) {
    if (control.value === 'So') {
      return "c'mon! tooo simple name"
    }

    return null
  }


}
