import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  API_GW: string;


  constructor(public http: HttpClient) {
    this.API_GW = environment.apiUrl.endsWith('/') ? environment.apiUrl : environment.apiUrl + '/';
  }
}
