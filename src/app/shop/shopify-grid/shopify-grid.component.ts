import { Component } from '@angular/core';
import { MainShopComponent } from '../main-shop/main-shop.component';
import { AsideShopComponent } from '../aside-shop/aside-shop.component';

@Component({
  selector: 'app-shopify-grid',
  standalone: true,
  imports: [MainShopComponent,AsideShopComponent],
  templateUrl: './shopify-grid.component.html',
  styleUrl: './shopify-grid.component.css'
})
export class ShopifyGridComponent {

}
