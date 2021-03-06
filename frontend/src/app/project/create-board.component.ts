import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.component.html',
  styles: [
    `div { margin-top: 1%; }
    
    div.back_button {
      margin-top: 0;
      margin-bottom: 1%;
    }
    `
  ]
})
export class CreateBoardComponent implements OnInit {
  createdBoard$: Observable<any>;
  myForm: FormGroup;
  loading: boolean = false;

  constructor(private formBuilder: FormBuilder, private dataService: DataService, private router: Router) {
    this.myForm = this.formBuilder.group({
      title: ['', [Validators.required, this.exampleValidator]],
      description: ['', []],
    })
    this.myForm.statusChanges.subscribe((data: any) => console.log(data));
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.loading = true;
    console.log(this.myForm.value);
    //after submit create a new project
    this.dataService.createBoard(this.myForm.value).subscribe((data) => {
      this.router.navigate(['boards', 'list']);
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
