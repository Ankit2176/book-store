import { Component } from '@angular/core';
import { FormContactComponent } from "../form-contact/form-contact.component";
import { OurStoresComponent } from "../our-stores/our-stores.component";

@Component({
  selector: 'app-billboard-contact',
  standalone: true,
  imports: [FormContactComponent, OurStoresComponent],
  templateUrl: './billboard-contact.component.html',
  styleUrl: './billboard-contact.component.css'
})
export class BillboardContactComponent {

}
