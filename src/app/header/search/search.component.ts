import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../product/product.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm: string = '';
  searchResults = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  searchProducts(event:any) {
    this.searchTerm = event.target.value;
    this.searchResults = this.productService.getProductByTitle(this.searchTerm);
  }

}
