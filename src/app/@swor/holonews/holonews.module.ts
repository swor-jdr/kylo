import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './holonews-routing.module';
import { NewshomeComponent } from './views/newshome/newshome.component';
import { ArticleComponent } from './views/article/article.component';
import { BlogService } from './services/blog.service';
import { ArticleElementComponent } from './components/article-element/article-element.component';
import { TitletagService } from './services/titletag.service';


@NgModule({
  declarations: [NewshomeComponent, ArticleComponent, ArticleElementComponent],
  imports: [
    CommonModule,
    routing,
  ],
  providers: [BlogService, TitletagService]
})
export class HolonewsModule { }
