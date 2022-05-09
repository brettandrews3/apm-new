import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IProduct } from "./product";

// By keeping the product data in the service here, we
// take data management away from the individual Component.
// This makes it easier to modify|refuse the logic.
// Setting @Injectable to 'root' makes the service available everywhere in app.
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = 'api/products/products.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl);
  }
}
