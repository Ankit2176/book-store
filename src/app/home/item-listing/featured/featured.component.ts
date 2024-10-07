import { Component } from '@angular/core';
import { HomeService } from '../../../services/home/home.service';

@Component({
  selector: 'app-featured',
  standalone: true,
  imports: [],
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.css'
})
export class FeaturedComponent {



  FeaturedObj :any

  
  
  constructor(private Services: HomeService) {


  }

  ngOnInit(): void {
    debugger;

    this.Services.getData().subscribe((res: any) => {
      debugger;
      this.FeaturedObj = res.FeaturedObj
    })

  }

}
