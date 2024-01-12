import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {StorageService} from "./storage.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  API_GW: string;


  constructor(public http: HttpClient,
              private router: Router) {
    this.API_GW = environment.apiUrl.endsWith('/') ? environment.apiUrl : environment.apiUrl + '/';
  }

  createHttpOption(withAccessToken: boolean) {
    let header: HttpHeaders | null;
    if (withAccessToken) {
      header = this.createHeaderWithAccessToken();
    }
    // @ts-ignore
    return {headers: header};
  }

  createHeaderWithAccessToken(): HttpHeaders | null {
    const accessToken = StorageService.getToken();
    if (accessToken) {
      return new HttpHeaders({'Authorization': 'Bearer ' + accessToken});
    } else {
      this.router.navigateByUrl('/');
      return null;
    }
  }
}
