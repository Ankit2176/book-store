import { Component } from '@angular/core';
import { BillboardSliderComponent } from '../billboard-slider/billboard-slider.component';
import { BestSellingItemComponent } from '../best-selling-item/best-selling-item.component';
import { CatogeriesComponent } from '../catogeries/catogeries.component';
import { CompanyServiceComponent } from '../company-service/company-service.component';
import { ItemListingComponent } from '../item-listing/item-listing.component';
import { LimitedOfferComponent } from '../limited-offer/limited-offer.component';

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [BillboardSliderComponent,BestSellingItemComponent,CatogeriesComponent,CompanyServiceComponent,ItemListingComponent,LimitedOfferComponent],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.css'
})
export class HomeLayoutComponent {

}
