import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelfComponent } from './views/self/self.component';


const routes: Routes = [
  { path: '', component: SelfComponent,
    data: {
      title: 'SWOR - Mon Profil'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
