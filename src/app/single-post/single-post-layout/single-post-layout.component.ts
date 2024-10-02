import { Component } from '@angular/core';
import { BillboardSinglePostComponent } from "../billboard-single-post/billboard-single-post.component";
import { ArticlePostComponent } from "../article-post/article-post.component";
import { ArticleCommentsComponent } from "../article-comments/article-comments.component";
import { FormCommentsComponent } from "../form-comments/form-comments.component";

@Component({
  selector: 'app-single-post-layout',
  standalone: true,
  imports: [BillboardSinglePostComponent, ArticlePostComponent, ArticleCommentsComponent, FormCommentsComponent],
  templateUrl: './single-post-layout.component.html',
  styleUrl: './single-post-layout.component.css'
})
export class SinglePostLayoutComponent {

}
