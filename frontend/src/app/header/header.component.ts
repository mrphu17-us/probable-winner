import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  name: String;
  email: String;
  isLogin;

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
  constructor(private router: Router) {
    if (localStorage.getItem('access_token') != null) this.isLogin = true;
  }

  logout(): void {
    localStorage.clear();
    this.isLogin = false;
    this.router.navigate(['auth', 'login']);
  }

  ngOnInit(): void {
    this.name = localStorage.getItem('name');
    this.email = localStorage.getItem('email');
  }
}
