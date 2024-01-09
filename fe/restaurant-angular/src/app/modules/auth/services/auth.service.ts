import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_GW: string;


  constructor(private http: HttpClient) {
    this.API_GW = environment.apiUrl.endsWith('/') ? environment.apiUrl : environment.apiUrl + '/';
  }

  signUp(user: any): Observable<any> {
    return this.http.post(this.API_GW + 'auth/signup', user)
  }
}
