import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ProductsComponent } from './pages/products/products.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SingleProductComponent } from './pages/products/single-product/single-product.component';
import { SingleCategoryComponent } from './pages/categories/single-category/single-category.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'categories', component: CategoriesComponent},
  { path: 'categories/:categoryName', component: SingleCategoryComponent},
  // { path: 'products', component: ProductsComponent},
  { path: 'products/:productId', component: SingleProductComponent},
  { path: 'add-product', component: AddProductComponent},
  { path: 'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
