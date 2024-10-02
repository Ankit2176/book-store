import { Component } from '@angular/core';
import { BlogBgImgComponent } from "../blog-bg-img/blog-bg-img.component";
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from "../main-content/main-content.component";

@Component({
  selector: 'app-blog-layout',
  standalone: true,
  imports: [BlogBgImgComponent, RouterOutlet, MainContentComponent],
  templateUrl: './blog-layout.component.html',
  styleUrl: './blog-layout.component.css'
})
export class BlogLayoutComponent {

}
