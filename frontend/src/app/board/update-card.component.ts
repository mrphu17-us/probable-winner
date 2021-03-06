import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-update-card',
  templateUrl: './update-card.component.html',
  styles: [
    `
      form {
        margin: auto;
        width: 50rem;
      }
    `,
  ],
})
export class UpdateCardComponent implements OnInit {
  myForm: FormGroup;
  board_id: String;
  card_id: String;
  subscription: Subscription;
  FormData: any;
  status;
  selectedOption = 'TODO';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private dataService: DataService
  ) {
    this.myForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', []],
      status: ['', [Validators.required]],
    });
    this.myForm.statusChanges.subscribe((data: any) => console.log(data));
  }

  onSubmit(): void {
    let data = {
      board_id: this.board_id,
      ...this.myForm.value,
    };
    this.dataService.updateCard(this.card_id, data).subscribe((data) => {
      this.router.navigate(['board', this.board_id]);
    });
  }

  onDelete(): void {
    console.log('delete');
    this.dataService.deleteCard(this.card_id).subscribe((_) => {
      this.router.navigate(['board', this.board_id]);
    });
  }

  ngOnInit(): void {
    this.subscription = this.activateRoute.params.subscribe((params: any) => {
      console.log(params);
      this.board_id = params['board_id'];
      this.card_id = params['card_id'];
      this.dataService.getCard(this.card_id).subscribe((data) => {
        this.selectedOption = data['status'];
        this.myForm.setValue({
          title: data['title'],
          description: data['description'],
          status: data['status'] ?? 'TODO',
        });
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  backToHome() {
    this.router.navigate(['board', this.board_id]);
  }
}
