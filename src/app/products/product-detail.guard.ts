import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

// Since a guard is a service, register it with an Angular injector:
@Injectable({
  // The CLI registers this guard w/ the root app, using providedIn property:
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {

  constructor(private router: Router) {}

  // Read parameter from the route. ActivatedRouteSnapshot contains info about route at any moment in time:
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // 'const' sets the ID from the route parameter.
      // Since route is ActivatedRouteSnapshot, use its paramMap to get param by using parameter name.
      // Number() converts the string parameter into a number.
      // Use the JS if() to check parameter. If id isn't a number or greater than 1, send an alert to user.
      // Then, activate route w/ code and route to Product List page.
      // Return 'false' to tell router to cancel activating the product detail route.
      // Else, return 'true' and continue to Product Detail page.
      const id = Number(route.paramMap.get('id'));
      if (isNaN(id) || id < 1) {
        alert('Invalid product id');
        this.router.navigate(['/products']);
      }
    return true;
  }

}
