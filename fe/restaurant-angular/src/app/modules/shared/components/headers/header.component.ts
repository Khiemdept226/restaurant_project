import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";
import {StorageService} from "../../services/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items!: MenuItem[] ;
  constructor(private router: Router) { }
  onShow = false

  ngOnInit(): void {
    this.items = [
      {
        label: 'User Profile',
        icon: 'pi pi-user',
        command: event => {
          this.showProfileConfig()
        }
      }
      ,
      {
        label: 'Log out',
        icon: 'pi pi-sign-out',
        command: event => {
          this.logout()
        }
      }
    ];
  }

  showProfile() {
    this.onShow = !this.onShow
  }

  showProfileConfig() {
    console.log('show profie')
  }

  logout() {
    StorageService.logOut()
    this.router.navigateByUrl('/signup')
    console.log('log-out')
  }

}
