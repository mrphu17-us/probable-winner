import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styles: [
    `
      nb-card {
        width: 30rem;
      }
    `,
  ],
})
export class NewCardComponent implements OnInit {
  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', []],
    });
    this.myForm.statusChanges.subscribe((data: any) => console.log(data));
  }

  onSubmit(): void {
    console.log('click Submit');
  }

  ngOnInit(): void {}
}
