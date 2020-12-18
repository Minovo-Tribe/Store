import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL } from '../model/url.model';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User;
  constructor(private http: HttpClient) {}

  async setUser() {
    this.user = await this.http.get<User>(URL.user).toPromise();
  }
}
