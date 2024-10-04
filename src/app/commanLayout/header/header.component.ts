import { Component, HostListener, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SearchPopupComponent } from "../search-popup/search-popup.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterOutlet, SearchPopupComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @ViewChild(SearchPopupComponent) searchPopup!: SearchPopupComponent;
}
