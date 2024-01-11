import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  static saveToken(token: string) {
    localStorage.removeItem('jwt')
    localStorage.setItem('jwt', token)
  }

  static saveUser(user: any) {
    localStorage.removeItem('user')
    localStorage.setItem('user', JSON.stringify(user))
  }

  static getToken() {
    return localStorage.getItem('jwt')
  }

  static getUser() {
    return JSON.parse(<string>localStorage.getItem('user'))
  }

  static getUserRole() {
    const user = this.getUser();
    if (user === null) {
      return ''
    }
    return user.role
  }

  static isAdminLogin() {
    if (this.getToken() === null) {
      return false
    }
    return this.getUserRole() === 'ADMIN'
  }

  static isCustomerLogin() {
    if (this.getToken() === null) {
      return false
    }
    return this.getUserRole() === 'CUSTOMER'
  }
}
