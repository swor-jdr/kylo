import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { BlogPost } from '../../services/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  constructor(private route: ActivatedRoute, private blog$: BlogService) { }

  article: BlogPost;

  ngOnInit() {
    this.route.params.subscribe(
      params => this.loadArticle(params['slug']),
      err => console.error(err)
    );
  }

  loadArticle(slug: string) {
    this.blog$.getBySlug(slug).subscribe(
      post => this.article = post,
      err => console.error(err)
    );
  }
}
