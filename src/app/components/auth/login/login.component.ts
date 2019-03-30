import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this._formBuilder.group({
    email: ['', Validators.compose([Validators.required, Validators.email, Validators.pattern('[^ @]*@[^ @]*')])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(5)])]
  });

  constructor(
    private _authSrv: AuthService,
    private _router: Router,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  }

  login(user: any) {
    this._authSrv.login(user.email, user.password)
      .then(res => {
        console.log(res);
        this._router.navigate(['/home']);
      });
  }

  logout() {
    this._authSrv.logout();
  }

}
