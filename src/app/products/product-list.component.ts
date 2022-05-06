import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

// 9.4: providers: [ProductService] brings in the new service that
// contains the list of products. The list below should be removed later.
@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  providers: [ProductService],
  styleUrls: ['./product-list.component.css']
})

// Angular 9.3 - Building a Service
// Angular 9.4 - Registering the Service
// Angular 9.5 - Injecting the Service

export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  //listFilter: string = 'cart';

  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In setter:', value);
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];

constructor(private productService: ProductService) {

}

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
    console.log('In OnInit');
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy));
  }
}

