import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/Product.interface';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  product: Product = {
    id: Math.floor(Math.random() * 100000000),
    title: '',
    price: 0,
    description: '',
    image: '',
    category: '',
    rating: {
      rate: 0,
      count: 1
    }
  }

  constructor(private productService: ProductsService, private router: Router, private toast: ToastrService) {}

  createProduct(event: Event) {
    event.preventDefault()
    this.productService.createProduct(this.product).subscribe(response => {
      // this.router.navigate(['products', this.product.id])
      this.toast.success('You added a new product.', 'New Product', {
        timeOut: 3000, // Set the duration of the toast in milliseconds
        progressBar: true, // Show a progress bar
        closeButton: true, // Show a close button
        extendedTimeOut: 2000, // Set the extended duration of the toast when hovered
        newestOnTop: true
      });
    })
    console.log(this.product);
   
  }
}
