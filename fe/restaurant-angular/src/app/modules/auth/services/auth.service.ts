import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {BaseService} from "../../shared/services/base.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {
  private authEndpoint = this.API_GW + 'auth/';

  signUp(user: any): Observable<any> {
    return this.http.post(this.authEndpoint + 'signup', user)
  }

  logIn(user: any): Observable<any> {
    return this.http.post(this.authEndpoint + 'login', user)
  }
}
