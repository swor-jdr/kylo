import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelfComponent } from './views/self/self.component';
import { MainComponent } from './views/main/main.component';


const routes: Routes = [
  { path: '', component: SelfComponent,
    data: {
      title: 'Mon Profil'
    }
  },
  {
    path: '/:slug', component: MainComponent,
    data: { title: 'Profil' },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
