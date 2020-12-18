import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL } from '../model/url.model';
import { UserState } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  async login(email: string, password: string): Promise<UserState> {
    try {
      const payload = { email, password };
      return await this.http.post<UserState>(URL.login, payload).toPromise();
    } catch (error) {
      console.log(error);
      return { isLoggedIn: false };
    }
  }
  async create(email: string, password: string): Promise<UserState> {
    try {
      const payload = { email, password };
      return await this.http.post<UserState>(URL.signup, payload).toPromise();
    } catch (error) {
      console.log(error);
    }
  }
  userState() {
    return this.http.get(URL.userState).toPromise();
  }
}
