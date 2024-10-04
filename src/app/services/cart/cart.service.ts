import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http : HttpClient) { }

  getData()
  {
    return this.http.get("assets/json/cart.json");
  }

}
