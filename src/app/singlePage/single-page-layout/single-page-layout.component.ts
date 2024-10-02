import { Component } from '@angular/core';
import { SinglePageTitleComponent } from '../single-page-title/single-page-title.component';
import { MainContentComponent } from "../../blogs/main-content/main-content.component";
import { SinglePageMainContentComponent } from "../single-page-main-content/single-page-main-content.component";
import { ProductInfoComponent } from "../product-info/product-info.component";
import { SinglePageRelatedItemComponent } from "../single-page-related-item/single-page-related-item.component";

@Component({
  selector: 'app-single-page-layout',
  standalone: true,
  imports: [SinglePageTitleComponent, MainContentComponent, SinglePageMainContentComponent, ProductInfoComponent, SinglePageRelatedItemComponent],
  templateUrl: './single-page-layout.component.html',
  styleUrl: './single-page-layout.component.css'
})
export class SinglePageLayoutComponent {

}
