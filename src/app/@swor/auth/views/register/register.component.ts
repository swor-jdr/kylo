import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Register } from '../../state/register.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private store: Store, private formBuilder: FormBuilder) { }

  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email': ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
      'password': ['', Validators.required],
      'confirm_password': ['', Validators.required],
      'acceptRules': ['', Validators.required]
    });
  }

  login() {
    this.store.dispatch(new Navigate(['auth/login']));
  }

  register(data: {email: string, password: string, confirm_password: string}) {
    if (data.confirm_password === data.password) {
      this.store.dispatch(new Register({ email: data.email, password: data.password }));
    }
    console.log(data);
  }
}
