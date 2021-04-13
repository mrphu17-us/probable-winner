import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styles: [
    `div { margin-top: 1%; }`
  ]
})
export class ProjectComponent implements OnInit {
  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      board_name: ['', [Validators.required, this.exampleValidator]],
      description: ['', []],
    })
    this.myForm.statusChanges.subscribe((data: any) => console.log(data));
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    //after submit create a new project
  }

  // --------- EXTRA VALIDATORS --------------
  exampleValidator(control: FormControl) {
    if (control.value === 'Board Name') {
      return "c'mon! tooo simple name"
    }

    return null
  }
}
