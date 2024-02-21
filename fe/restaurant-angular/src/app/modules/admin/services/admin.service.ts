import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminService extends BaseService {
  private adminEndpoint = this.API_GW + 'admin/';

  postCategory(categoryDto: any): Observable<any> {
    return this.http.post(this.adminEndpoint + 'category', categoryDto, this.createHttpOption(true))
  }

  getCategoryList() {
    return this.http.get(this.adminEndpoint + 'categories', this.createHttpOption(true))
  }
}
