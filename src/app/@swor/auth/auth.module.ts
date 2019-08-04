import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './auth.routing';
import { LoginComponent } from './views/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './views/register/register.component';
import { CreatePersonnageComponent } from './views/create-personnage/create-personnage.component';

@NgModule({
  imports: [
    routing,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, RegisterComponent, CreatePersonnageComponent],
  providers: []
})
export class AuthModule { }
