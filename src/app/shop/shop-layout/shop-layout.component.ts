import { Component } from '@angular/core';
import { BillboardShopComponent } from "../billboard-shop/billboard-shop.component";
import { ShopifyGridComponent } from "../shopify-grid/shopify-grid.component";

@Component({
  selector: 'app-shop-layout',
  standalone: true,
  imports: [BillboardShopComponent, ShopifyGridComponent],
  templateUrl: './shop-layout.component.html',
  styleUrl: './shop-layout.component.css'
})
export class ShopLayoutComponent {

}
