import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items!: MenuItem[] ;
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-external-link',
        routerLink: 'dashboard'
      },
      {
        label: 'Categories',
        icon: 'pi pi-box',
        routerLink: 'category'
      },
    ];
  }

}
