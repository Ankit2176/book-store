import { Component, OnInit } from '@angular/core';

import { HomeService } from '../../services/home/home.service';

@Component({
  selector: 'app-instagram',
  standalone: true,
  imports: [],
  templateUrl: './instagram.component.html',
  styleUrl: './instagram.component.css'
})
export class InstagramComponent implements OnInit {


  InstaObj: any


  /**
   *
   */
  constructor(private Services: HomeService) {


  }

  ngOnInit(): void {

    this.Services.getData().subscribe((res: any) => {

      this.InstaObj = res.InstaObj
    })

  }

}
