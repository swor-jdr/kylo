import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopicService } from './services/topic.service';
import { ForumService } from './services/forum.service';
import { PostService } from './services/post.service';
import { IndexComponent } from './views/index/index.component';
import { ForumComponent } from './views/forum/forum.component';
import { TopicComponent } from './views/topic/topic.component';
import { PostingComponent } from './views/posting/posting.component';
import { routing } from './forum-routing.module';

@NgModule({
  declarations: [IndexComponent, ForumComponent, TopicComponent, PostingComponent],
  imports: [
    routing,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [TopicService, ForumService, PostService]
})
export class ForumModule { }
