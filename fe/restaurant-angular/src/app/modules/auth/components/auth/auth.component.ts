import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  showPass = [false, false, false];
  isRegister = false
  constructor() { }

  ngOnInit(): void {
  }

  onRegister() {
    this.isRegister = true
  }

  onLogin() {
    this.isRegister = false
  }

}
