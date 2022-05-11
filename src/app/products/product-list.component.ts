import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

// 9.4: providers: [ProductService] brings in the new service that
// contains the list of products. The list below should be removed later.
@Component({
  templateUrl: './product-list.component.html',
  providers: [ProductService],
  styleUrls: ['./product-list.component.css']
})

// Angular 11.2 - Generating Code w/ Angular CLI
// Angular 11.3 - How Routing Works
// Angular 11.5 - Configuring Routes
// Angular 11.6 - Tying Routes to Actions
// Angular 11.7 - Placing the Views

export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string = '';
  sub!: Subscription;

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
    // next: action taken when Observable emits item; products = IProduct[]
    // error: executes if Observable fails
    this.sub = this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
        },
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
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

