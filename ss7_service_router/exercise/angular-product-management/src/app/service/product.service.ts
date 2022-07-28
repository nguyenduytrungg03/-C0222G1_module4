import { Injectable } from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../model/category";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  API_URL_PRODUCT = 'http://localhost:3000/product';
  API_URL_CATEGORY = 'http://localhost:3000/category';

  constructor(private httpClient: HttpClient) {
  }

  getAllProduct(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.API_URL_PRODUCT);
  }

  getAllCategory(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.API_URL_CATEGORY);
  }

  saveProduct(product): Observable<void> {
    return this.httpClient.post<void>(this.API_URL_PRODUCT, product);
  }
  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.API_URL_PRODUCT + '/' + id);
  }
  updateProduct(product): Observable<void> {
    return this.httpClient.patch<void>(this.API_URL_PRODUCT + '/' + product.id, product);
  }

  findById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.API_URL_PRODUCT + '/' + id);
  }
}
