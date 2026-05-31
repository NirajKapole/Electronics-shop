import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <a [routerLink]="['/products', product.id]"
     class="card-link">
    <div class="product-card">
      <h2>{{ product.name }}</h2>

      <p><strong>Category:</strong> {{ product.category }}</p>

      <p><strong>Price:</strong> ₹{{ product.price }}</p>

      <p><strong>Stock:</strong> {{ product.stockQuantity }}</p>

      <p>{{ product.description }}</p>
    </div>
  `,
  styles: [`
    .product-card {
      border: 1px solid #ccc;
      border-radius: 10px;
      padding: 15px;
      background: #f9f9f9;
    }
  `]
})
export class ProductCardComponent {
  @Input() product!: Product;
}