import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs'
import { Product } from '../models/Product.interface';
import { Category } from '../models/Category.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url: string = 'https://fakestoreapi.com/products'

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url)
  }

  getProduct(productId: number): Observable<Product> {
    return this.http.get<Product>(`${this.url}/${productId}`)
  }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.url}/categories`)
  }

  getCategoryProducts(categoryName: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/category/${categoryName}`)
  }
}
