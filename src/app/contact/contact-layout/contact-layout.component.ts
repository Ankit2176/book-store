import { Component } from '@angular/core';
import { BillboardContactComponent } from "../billboard-contact/billboard-contact.component";
import { FormContactComponent } from "../form-contact/form-contact.component";
import { OurStoresComponent } from "../our-stores/our-stores.component";

@Component({
  selector: 'app-contact-layout',
  standalone: true,
  imports: [BillboardContactComponent, FormContactComponent, OurStoresComponent],
  templateUrl: './contact-layout.component.html',
  styleUrl: './contact-layout.component.css'
})
export class ContactLayoutComponent {

}
