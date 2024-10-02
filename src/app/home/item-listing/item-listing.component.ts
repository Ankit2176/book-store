import { Component } from '@angular/core';
import { FeaturedComponent } from './featured/featured.component';
import { BestReviewedComponent } from './best-reviewed/best-reviewed.component';
import { OnSaleComponent } from './on-sale/on-sale.component';
import { LatestItemComponent } from './latest-item/latest-item.component';

@Component({
  selector: 'app-item-listing',
  standalone: true,
  imports: [FeaturedComponent,BestReviewedComponent,OnSaleComponent,LatestItemComponent],
  templateUrl: './item-listing.component.html',
  styleUrl: './item-listing.component.css'
})
export class ItemListingComponent {

}
