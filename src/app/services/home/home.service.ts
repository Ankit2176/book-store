import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) { }


  getData() {
    return this.http.get<any>("assets/json/home.json")
  }
}
