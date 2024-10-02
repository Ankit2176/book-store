import { Component } from '@angular/core';
import { BillboardCheckoutComponent } from "../billboard-checkout/billboard-checkout.component";
import { CheckoutFormComponent } from "../checkout-form/checkout-form.component";

@Component({
  selector: 'app-checkout-layout',
  standalone: true,
  imports: [BillboardCheckoutComponent, CheckoutFormComponent],
  templateUrl: './checkout-layout.component.html',
  styleUrl: './checkout-layout.component.css'
})
export class CheckoutLayoutComponent {

}
