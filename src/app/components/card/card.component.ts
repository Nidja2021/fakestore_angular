import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/Product.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() product!: Product
  // @Output() getProductInfo: EventEmitter<Product> = new EventEmitter()

  constructor(private router: Router) {}

  getProduct(productId: number) {
    this.router.navigate(['products', productId])
  }
}
