import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewshomeComponent } from './views/newshome/newshome.component';
import { ArticleComponent } from './views/article/article.component';


const routes: Routes = [
  {
    path: '',
    component: NewshomeComponent,
    data: {
      title: ''
    }
  },
  {
    path: ':slug',
    component: ArticleComponent,
    data: {
      title: ''
    }
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes)
