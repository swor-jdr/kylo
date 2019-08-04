import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { CreatePersonnageComponent } from './views/create-personnage/create-personnage.component';

const routes: Routes = [
    {
        path: 'login',
        data: {
            title: 'SWOR - Login'
        },
        component: LoginComponent
    },
    {
        path: 'enregistrement',
        data: {
            title: "SWOR - S'enregistrer"
        },
        component: RegisterComponent
    },
    {
        path: 'creer',
        data: {
            title: 'SWOR - Nouveau personnage'
        },
        component: CreatePersonnageComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
