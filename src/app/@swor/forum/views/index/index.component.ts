import { Component, OnInit } from '@angular/core';
import { Forum } from '../../models/forum.model';
import { ForumService } from '../../services/forum.service';
import { Store } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private forumS: ForumService, private store: Store) { }

  forums: Forum[];

  ngOnInit() {
    this.forumS.index().subscribe(
      res => {
        this.forums = res
        console.log('[Forum Index] ', res)
      },
      err => console.error(err)
    );
  }

  /**
   * Navigate to chosen forum
   */
  goToForum(slug: string) {
    this.store.dispatch(new Navigate(['forum/', slug]))
  }

  goToTopic(slug: string, page: number = null) {}
}
