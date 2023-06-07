import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/Category.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  category: string[] = []
  displayedColumns: string[] = ['name', 'view'];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getCategories().subscribe(categories => this.category = categories)
    // console.log(this.category);
    
  }


}
