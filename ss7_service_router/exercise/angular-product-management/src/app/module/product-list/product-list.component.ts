import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.productService.getAllProduct().subscribe(value => this.products = value);
  }

  delete(id: number) {
    this.productService.delete(id).subscribe(
      value => {},
      error => {},
      () => this.getAll()
    );
  }
}
