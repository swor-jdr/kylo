import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { FormBuilder, FormGroup, Validators, EmailValidator } from '@angular/forms';
import { Logout, LoginWithEmailAndPassword } from '../../state/auth.actions';
import { Navigate } from '@ngxs/router-plugin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private store: Store,
    private formBuilder: FormBuilder
  ) { }

  isRecoverform = false;
  loginForm: FormGroup;
  recoverForm: FormGroup;

  showRecoverForm() {
    this.isRecoverform = !this.isRecoverform;
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });

    this.recoverForm = this.formBuilder.group({
      'email': ['', Validators.required]
    });

    this.store.dispatch(new Logout);
  }

  register() {
    this.store.dispatch(new Navigate(['/auth/enregistrement']));
  }

  /**
   * Try to login
   * @param data {email: string, password: string}
   */
  login(data: {email: string, password: string}) {
    this.store.dispatch(new LoginWithEmailAndPassword({
      email: data.email,
      password: data.password
    }));
  }

  askRecovery() {
    //
  }
}
