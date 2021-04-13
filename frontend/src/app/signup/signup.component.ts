import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public authService: AuthServiceService,
    public router: Router
  ) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.authService.signUp(this.myForm.value).subscribe((res) => {
      if (res) {
        this.router.navigate(['auth','login']);
      }
    });
  }
}
