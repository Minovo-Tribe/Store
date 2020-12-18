import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private sideNavList: Array<any>;
  constructor(private http: HttpClient) {}

  private async getHttpSideNavList() {
    return await this.http.get<Array<any>>('api/store/sideMenu').toPromise();
  }

  async getSideNavList(): Promise<Array<any>> {
    return this.sideNavList
      ? this.sideNavList
      : await this.getHttpSideNavList();
  }
}
