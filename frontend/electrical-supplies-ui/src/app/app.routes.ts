import { Routes } from '@angular/router';
import { AddProductComponent } from './features/products/pages/add-product.component';
import { ProductListComponent } from './features/products/pages/product-list.component';

export const routes: Routes = [

  {
    path: '',
    component: ProductListComponent
  },

  {
    path: 'add-product',
    component: AddProductComponent
  }
];
