import { Component } from '../../node_modules/@angular/core';
import { ProductListComponent } from './features/products/pages/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent],
  template: `<app-product-list></app-product-list>`
})
export class AppComponent {}