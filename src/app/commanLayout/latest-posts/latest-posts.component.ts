import { RouterLink } from '@angular/router';
import { HomeService } from './../../services/home/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-posts',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './latest-posts.component.html',
  styleUrl: './latest-posts.component.css'
})
export class LatestPostsComponent implements OnInit {

  LatestPostObj: any
  singlePostObj: any[] = []

  /**
   *
   */
  constructor(private Services: HomeService) {


  }

  ngOnInit(): void {

    this.Services.getData().subscribe((res: any) => {

      this.LatestPostObj = res.LatestPostObj
    })

  }

  goToView(item: any) {
    this.singlePostObj = [];

    this.singlePostObj.push(item);

    localStorage.setItem('singlePostData', JSON.stringify(this.singlePostObj));
  }

}

