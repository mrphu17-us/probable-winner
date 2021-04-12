import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {

  myForm:FormGroup;

  constructor(private formBuilder:FormBuilder) {
    this.myForm = this.formBuilder.group({
      user_name:['',[Validators.required,]],
      email_name:['',[Validators.required,]],
      password_field:['',[Validators.required,]]
    })
    this.myForm.statusChanges.subscribe((data: any) => console.log(data));
   }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log("click Submit")
  }

  exampleValidator(control: FormControl) {
    if (control.value === 'Board Name') {
      return "c'mon! tooo simple name"
    }

    return null
  }

=======
  constructor() {}

  ngOnInit(): void {}
}
