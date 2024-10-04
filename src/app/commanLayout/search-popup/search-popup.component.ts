import { Component } from '@angular/core';

@Component({
  selector: 'app-search-popup',
  standalone: true,
  imports: [],
  templateUrl: './search-popup.component.html',
  styleUrl: './search-popup.component.css'
})
export class SearchPopupComponent {

  isVisible = false;

  openPopup() {
    this.isVisible = true;
    setTimeout(() => {
      const searchField = document.getElementById('search-form') as HTMLElement;
      searchField?.focus();
    }, 350);
  }

  closePopup() {
    this.isVisible = false;
  }

  handleKeyup(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.closePopup();
    }
}

}
