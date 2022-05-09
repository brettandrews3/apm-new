import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
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

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    // In a real world app, we may send the server to some remote logging infrastructure,
    // instead of just logging it to the console.
    let errorMessage = '';
    if(err.error instanceof ErrorEvent) {
      // A client-side|network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // Backend returned an unsuccessful response code.
      // Response body may offer clues as to what went wrong.
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
