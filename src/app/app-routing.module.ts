import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';

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
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      {
        path: 'forum',
        loadChildren: () => import('./@swor/forum/forum.module').then(m => m.ForumModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./starter/starter.module').then(m => m.StarterModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      },
      {
        path: 'profil',
        loadChildren: () => import('./@swor/profile/profile.module').then(m => m.ProfileModule)
      },
    ]
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];
