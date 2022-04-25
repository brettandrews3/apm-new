import { Component } from "@angular/core";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html'
})

// PS Angular 5.5 - Binding w/ Interpolation
// pageTitle is bound to the HTML of same name, replacing
// 'Product List' at line 3 w/ the value below.
export class ProductListComponent {
  pageTitle: string = 'Product List';
}
