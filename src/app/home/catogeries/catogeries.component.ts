import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home/home.service';

@Component({
  selector: 'app-catogeries',
  standalone: true,
  imports: [],
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
    debugger;
    this.Services.getData().subscribe((res: any) => {
      debugger;
      this.CatogObj = res.CatogObj
    })

  }

}
