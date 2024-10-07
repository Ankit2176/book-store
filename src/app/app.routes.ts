import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { BlogLayoutComponent } from './blogs/blog-layout/blog-layout.component';
import { SinglePageLayoutComponent } from './singlePage/single-page-layout/single-page-layout.component';
import { ShopLayoutComponent } from './shop/shop-layout/shop-layout.component';
import { CartLayoutComponent } from './cart/cart-layout/cart-layout.component';
import { CheckoutLayoutComponent } from './checkout/checkout-layout/checkout-layout.component';
import { SinglePostLayoutComponent } from './single-post/single-post-layout/single-post-layout.component';
import { ContactLayoutComponent } from './contact/contact-layout/contact-layout.component';
import { HomeLayoutComponent } from './home/home-layout/home-layout.component';

export const routes: Routes = [


  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeLayoutComponent
      },
      {
        path: 'home',
        component: HomeLayoutComponent
      },
      {
        path: 'blog',
        component: BlogLayoutComponent
      },
      {
        path: 'singlePage',
        component: SinglePageLayoutComponent
      },
      {
        path: 'cart',
        component: CartLayoutComponent
      },
      {
        path: 'checkout',
        component: CheckoutLayoutComponent
      },
      {
        path: 'singlePost',
        component: SinglePostLayoutComponent
      },
      {
        path: 'contact',
        component: ContactLayoutComponent
      },
      {
        path: 'shop',
        component: ShopLayoutComponent
      }
    ]
  }

];
