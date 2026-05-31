import { Routes } from '@angular/router';
import { AddProductComponent } from './features/products/pages/add-product.component';
import { ProductListComponent } from './features/products/pages/product-list.component';
import { EditProductComponent } from './features/products/pages/edit-product.component';
import { ProductDetailsComponent } from './features/products/pages/product-details.component';

export const routes: Routes = [

  {
    path: '',
    component: ProductListComponent
  },

  {
    path: 'add-product',
    component: AddProductComponent
  },

  {
    path: 'edit-product/:id',
    component: EditProductComponent
  },

  {
    path: 'product/:id',
    component: ProductDetailsComponent
  }
];
