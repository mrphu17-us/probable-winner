import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service';
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
  board_id: String;
  subscription: Subscription;
  FormData: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private dataService: DataService
  ) {
    this.myForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', []],
    });
    this.myForm.statusChanges.subscribe((data: any) => console.log(data));
    this.myForm.setValue({ title: '', description: '' });
  }

  onSubmit(): void {
    let data = {
      board_id: this.board_id,
      ...this.myForm.value,
    };
    this.dataService.createCard(data).subscribe((data) => {
      this.router.navigate(['board', this.board_id]);
    });
  }

  ngOnInit(): void {
    this.subscription = this.activateRoute.params.subscribe(
      (params: any) => (this.board_id = params['board_id'])
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  backToHome() {
    this.router.navigate(['board', this.board_id]);
  }
}
