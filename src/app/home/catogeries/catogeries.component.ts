import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home/home.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-catogeries',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './catogeries.component.html',
  styleUrl: './catogeries.component.css',
  host: { ngSkipHydration: 'true' },
})
export class CatogeriesComponent implements OnInit {

  CatogObj: any


  /**
   *
   */
  constructor(private Services: HomeService) {


  }

  ngOnInit(): void {

    this.Services.getData().subscribe((res: any) => {

      this.CatogObj = res.CatogObj
    })

  }

}
