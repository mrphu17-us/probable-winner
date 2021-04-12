import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent  implements OnInit {
  myForm:FormGroup;
  constructor(private formBuilder:FormBuilder) {
    this.myForm = this.formBuilder.group({
      email_name:['',[Validators.required,]],
      password_field:['',[Validators.required,]]
    })
    this.myForm.statusChanges.subscribe((data: any) => console.log(data));
   }

   onSubmit(): void {
    console.log("click Submit")
  }

  ngOnInit(): void {
  }
  exampleValidator(control: FormControl) {
    if (control.value === 'Login Name') {
      return "c'mon! tooo simple name"
    }

    return null
  }
  
}
