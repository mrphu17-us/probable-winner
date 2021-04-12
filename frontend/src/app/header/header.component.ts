import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
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
  constructor() {}

  ngOnInit(): void {}
}
