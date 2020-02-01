import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { NoSideComponent } from './layouts/no-side/no-side.component';

export const Approutes: Routes = [
  {
    path: 'auth',
    component: BlankComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./@swor/auth/auth.module').then(m => m.AuthModule)
      },
    ]
  },
  {
    path: 'holonews',
    component: NoSideComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./@swor/holonews/holonews.module').then(m => m.HolonewsModule) 
      }
    ]
  },
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () => import('./starter/starter.module').then(m => m.StarterModule)
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
