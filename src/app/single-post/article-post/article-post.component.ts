import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article-post',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './article-post.component.html',
  styleUrl: './article-post.component.css'
})
export class ArticlePostComponent implements OnInit {


  singlePostObj: any[] = []


  ngOnInit() {
    this.loadPostItems();
  }
  loadPostItems() {

    const postData = localStorage.getItem('singlePostData');

    if (postData) {
      this.singlePostObj = JSON.parse(postData);
    }
  }
}
