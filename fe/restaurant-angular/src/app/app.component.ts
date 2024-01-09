import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

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
      this.router.navigate(['/signup'])
    } else {
      this.router.navigate(['/signup'])
    }
  }


}
