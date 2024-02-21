import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {StorageService} from "./modules/shared/services/storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'restaurant-angular';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    const pathName = window.location.pathname;
    if (pathName !== '/signup') {
      if (StorageService.isCustomerLogin()) {
        if (pathName === '/') {
          this.router.navigateByUrl('customer')
        } else {
          this.router.navigate([window.location.pathname]);
        }
      } else if (StorageService.isAdminLogin()) {
        if (pathName === '/') {
          this.router.navigateByUrl('admin')
        } else {
          this.router.navigate([window.location.pathname]);
        }
      } else {
        this.router.navigate(['/signup'])
      }
    } else {
      this.router.navigate(['/signup'])
    }
  }


}
