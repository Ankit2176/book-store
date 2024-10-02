import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SearchPopupComponent } from '../commanLayout/search-popup/search-popup.component';
import { HeaderComponent } from '../commanLayout/header/header.component';
import { CustomerReviewsComponent } from '../commanLayout/customer-reviews/customer-reviews.component';
import { LatestPostsComponent } from '../commanLayout/latest-posts/latest-posts.component';
import { InstagramComponent } from '../commanLayout/instagram/instagram.component';
import { FooterComponent } from '../commanLayout/footer/footer.component';
import { FooterBottomComponent } from '../commanLayout/footer-bottom/footer-bottom.component';
import { HomeLayoutComponent } from "../home/home-layout/home-layout.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, SearchPopupComponent, HeaderComponent, CustomerReviewsComponent, LatestPostsComponent, InstagramComponent, FooterComponent, FooterBottomComponent, HomeLayoutComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
