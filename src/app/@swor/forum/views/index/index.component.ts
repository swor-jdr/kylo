import { Component, OnInit } from '@angular/core';
import { Forum } from '../../models/forum.model';
import { ForumService } from '../../services/forum.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private forumS: ForumService) { }

  forums: Forum[];

  ngOnInit() {
    this.forumS.index().subscribe(
      res => this.forums = res,
      err => console.error(err)
    );
  }

  goToForum(slug: string) {}

  goToTopic(slug: string, page: number = null) {}
}
