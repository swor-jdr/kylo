import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './holonews-routing.module';
import { NewshomeComponent } from './views/newshome/newshome.component';
import { ArticleComponent } from './views/article/article.component';
import { BlogService } from './services/blog.service';


@NgModule({
  declarations: [NewshomeComponent, ArticleComponent],
  imports: [
    CommonModule,
    routing,
  ],
  providers: [BlogService]
})
export class HolonewsModule { }
