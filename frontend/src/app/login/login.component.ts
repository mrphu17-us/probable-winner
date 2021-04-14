import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public authService: AuthServiceService,
    public router: Router
  ) {
    this.myForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.authService.signIn(this.myForm.value).subscribe((data) => {
      localStorage.setItem('access_token', data.token);
      localStorage.setItem('email', data.email);
      localStorage.setItem('name', data.name);
      this.authService.emitValue({ isLoggedIn: true });
      this.router.navigate(['boards', 'list']);
    });
  }

  ngOnInit(): void { }
}
