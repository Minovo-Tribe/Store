import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  constructor(public router: Router, private auth: AuthService) {}

  ngOnInit() {}

  async signIn() {
    try {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      await this.auth.login(email, password);
      console.log('home');
      this.router.navigate(['home']);
    } catch (error) {
      console.log(error);
    }
  }
}
