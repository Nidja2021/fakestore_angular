import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.scss']
})
export class SingleCategoryComponent implements OnInit {
  categoryProducts: Product[] = []
  categoryName: string = ''
  constructor(private productService: ProductsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoryName = params['categoryName']
      console.log(this.categoryName);
      
      this.productService.getCategoryProducts(this.categoryName).subscribe(products => this.categoryProducts = products)
    })
  }
}
