import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbMenuItem } from '@nebular/theme';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  name: String;
  email: String;
  isLogin: Boolean;

  items: NbMenuItem[] = [
    {
      title: 'Dashboard',
      icon: 'shopping-cart-outline',
      link: '/dashboard/1',
      home: true,
    },
    {
      title: 'Signin',
      icon: 'shopping-cart-outline',
      link: '/auth/signin',
      home: false,
    },
    {
      title: 'Signup',
      icon: 'shopping-cart-outline',
      link: '/auth/signup',
      home: false,
    },
  ];
  constructor(
    private router: Router,
    private authService: AuthServiceService
  ) {}

  logout(): void {
    localStorage.clear();
    this.authService.emitValue({ isLoggedIn: false });
    this.router.navigate(['auth', 'login']);
  }

  ngOnInit(): void {
    this.authService.emitter.subscribe((data) => {
      if (data.isLoggedIn == true) {
        this.isLogin = true;
        this.name = localStorage.getItem('name');
        this.email = localStorage.getItem('email');
      } else {
        this.isLogin = false;
        this.name = '';
        this.email = '';
      }
    });
  }
}
