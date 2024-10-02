import { Component } from '@angular/core';
import { ArticlePostComponent } from "../article-post/article-post.component";
import { ArticleCommentsComponent } from "../article-comments/article-comments.component";
import { FormCommentsComponent } from "../form-comments/form-comments.component";

@Component({
  selector: 'app-billboard-single-post',
  standalone: true,
  imports: [ArticlePostComponent, ArticleCommentsComponent, FormCommentsComponent],
  templateUrl: './billboard-single-post.component.html',
  styleUrl: './billboard-single-post.component.css'
})
export class BillboardSinglePostComponent {

}
