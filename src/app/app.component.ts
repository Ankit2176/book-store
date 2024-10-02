import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BestSellingItemComponent } from './home/best-selling-item/best-selling-item.component';
import { CompanyServiceComponent } from './home/company-service/company-service.component';
import { BillboardSliderComponent } from './home/billboard-slider/billboard-slider.component';
import { LimitedOfferComponent } from './home/limited-offer/limited-offer.component';
import { ItemListingComponent } from './home/item-listing/item-listing.component';
import { CatogeriesComponent } from "./home/catogeries/catogeries.component";
import { BillboardShopComponent } from './shop/billboard-shop/billboard-shop.component';
import { ShopifyGridComponent } from './shop/shopify-grid/shopify-grid.component';
import { BillboardCartComponent } from './cart/billboard-cart/billboard-cart.component';
import { BillboardCheckoutComponent } from './checkout/billboard-checkout/billboard-checkout.component';
import { CheckoutFormComponent } from "./checkout/checkout-form/checkout-form.component";
import { BillboardSinglePostComponent } from "./single-post/billboard-single-post/billboard-single-post.component";
import { BillboardContactComponent } from "./contact/billboard-contact/billboard-contact.component";
import { HomeLayoutComponent } from './home/home-layout/home-layout.component';
import { ShopLayoutComponent } from "./shop/shop-layout/shop-layout.component";
import { CartLayoutComponent } from "./cart/cart-layout/cart-layout.component";
import { CheckoutLayoutComponent } from "./checkout/checkout-layout/checkout-layout.component";
import { ContactLayoutComponent } from "./contact/contact-layout/contact-layout.component";
import { SinglePostLayoutComponent } from "./single-post/single-post-layout/single-post-layout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeLayoutComponent,
    BestSellingItemComponent, CompanyServiceComponent, BillboardSliderComponent, LimitedOfferComponent, ItemListingComponent, CatogeriesComponent, BillboardShopComponent, ShopifyGridComponent, BillboardCartComponent, BillboardCheckoutComponent, CheckoutFormComponent, BillboardSinglePostComponent, BillboardContactComponent, ShopLayoutComponent, CartLayoutComponent, CheckoutLayoutComponent, ContactLayoutComponent, SinglePostLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Book-Store';
}
