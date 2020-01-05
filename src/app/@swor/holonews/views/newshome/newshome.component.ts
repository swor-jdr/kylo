import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { BlogPost } from '../../services/article.model';

@Component({
  selector: 'app-newshome',
  templateUrl: './newshome.component.html',
  styleUrls: ['./newshome.component.css']
})
export class NewshomeComponent implements OnInit {
  articles: BlogPost[];

  constructor(private blog$: BlogService) { }

  ngOnInit() {
    this.blog$.all().subscribe(
      res => this.articles = res.data,
      err => console.error(err)
    );
    console.log('initiated')
  }

}
