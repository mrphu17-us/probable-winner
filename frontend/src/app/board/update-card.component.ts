import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-card',
  templateUrl: './update-card.component.html',
  styles: [
    `
      nb-card {
        width: 30rem;
      }
    `,
  ],
})
export class UpdateCardComponent implements OnInit {
  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', []],
    });
    this.myForm.statusChanges.subscribe((data: any) => console.log(data));
  }

  ngOnInit(): void {}
}
