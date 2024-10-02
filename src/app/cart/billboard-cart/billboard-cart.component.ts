import { Component } from '@angular/core';
import { CartTableComponent } from '../cart-table/cart-table.component';
import { CartTotalComponent } from '../cart-total/cart-total.component';

@Component({
  selector: 'app-billboard-cart',
  standalone: true,
  imports: [CartTableComponent,CartTotalComponent],
  templateUrl: './billboard-cart.component.html',
  styleUrl: './billboard-cart.component.css'
})
export class BillboardCartComponent {

}
