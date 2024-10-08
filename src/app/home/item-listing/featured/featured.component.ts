import { Component } from '@angular/core';
import { HomeService } from '../../../services/home/home.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-featured',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.css'
})
export class FeaturedComponent {



  FeaturedObj: any



  constructor(private Services: HomeService) {


  }

  ngOnInit(): void {
    this.Services.getData().subscribe((res: any) => {
      this.FeaturedObj = res.FeaturedObj
    })

  }

  singleProductObj: any[] = []

  goToView(item: any) {

    this.singleProductObj = [];

    this.singleProductObj.push(item);

    localStorage.setItem('singleProduct', JSON.stringify(this.singleProductObj));
  }
}
