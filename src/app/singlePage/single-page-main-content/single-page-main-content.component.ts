import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-page-main-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './single-page-main-content.component.html',
  styleUrl: './single-page-main-content.component.css',
})
export class SinglePageMainContentComponent {
  singleProductObj: any[] = [];

  ngOnInit() {
    this.loadProductItems();
  }

  loadProductItems() {
    const productData = localStorage.getItem('singleProduct');
    if (productData) {
      this.singleProductObj = JSON.parse(productData);
    }
  }

  increaseQuantity(index: number) {
    this.singleProductObj[index].quantity =
      (this.singleProductObj[index].quantity || 1) + 1;
  }

  decreaseQuantity(index: number) {
    if (this.singleProductObj[index].quantity > 1) {
      this.singleProductObj[index].quantity--;
    }
  }

  updateQuantity(index: number, event: Event) {
    const input = event.target as HTMLInputElement;
    const value = parseInt(input.value);

    if (!isNaN(value) && value > 0) {
      this.singleProductObj[index].quantity = value;
    } else {
      this.singleProductObj[index].quantity = 1;
    }
  }

  addToCartProduct() {
    localStorage.setItem('cart', JSON.stringify(this.singleProductObj));
  }
}
