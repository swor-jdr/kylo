import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HolonewsRoutingModule } from './holonews-routing.module';
import { NewshomeComponent } from './views/newshome/newshome.component';
import { ArticleComponent } from './views/article/article.component';


@NgModule({
  declarations: [NewshomeComponent, ArticleComponent],
  imports: [
    CommonModule,
    HolonewsRoutingModule
  ]
})
export class HolonewsModule { }
