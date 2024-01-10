import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Snackbar} from "../../../../util/utils";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  showPass = [false, false, false];
  isRegister = false
  formLogin!: FormGroup;
  snackBar = new Snackbar(this.messageService)


  constructor(private formBuilder: FormBuilder,
              private messageService: MessageService,
              private authService: AuthService) {
    this.initFormLogin()
  }

  ngOnInit(): void {
  }

  initFormLogin() {
    this.formLogin = this.formBuilder.group({
      name: [null, []],
      email: [null, []],
      password: [null, []],
      confirm: [null, []]
    })
  }

  passwordNotMatch() {
    return this.formLogin.value.password !== this.formLogin.value.confirm && this.isRegister
  }

  isDisableButton() {
    return this.passwordNotMatch()
  }

  onRegister() {
    this.isRegister = true
  }

  onLogin() {
    this.isRegister = false
  }

  onSubmitForm() {
    if (this.isRegister) {
      this.registerNewUser()
    } else {
      this.loginUser()
    }
  }

  loginUser() {
    const form = this.formLogin.value
    const newUser = {
      email: form.email,
      password: form.password
    }
    this.authService.logIn(newUser).subscribe({
      next: data => {
        console.log(data)
        this.snackBar.displaySuccessful('Register successful')
      },
      error: err => {
        this.snackBar.displayError('Register fail')
      }
    })
  }

  registerNewUser() {
    console.log(this.formLogin.value)
    const form = this.formLogin.value
    const newUser = {
      name: form.name,
      email: form.email,
      password: form.password
    }
    this.authService.signUp(newUser).subscribe({
      next: value => {
        console.log(value)
        if (value) {
          this.snackBar.displaySuccessful('Register successful')
        }
      },
      error: err => {
        this.snackBar.displayError('Register fail')
        console.log(err)
      }
    })
  }

}
