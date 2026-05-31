import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <h1>Add Product</h1>

    <form (ngSubmit)="submit()" #productForm="ngForm">
      <label>
        Name
        <input name="name" [(ngModel)]="product.name" required />
      </label>

      <label>
        Category
        <input name="category" [(ngModel)]="product.category" required />
      </label>

      <label>
        Price
        <input
          name="price"
          type="number"
          [(ngModel)]="product.price"
          required
          min="0"
        />
      </label>

      <label>
        Stock Quantity
        <input
          name="stockQuantity"
          type="number"
          [(ngModel)]="product.stockQuantity"
          required
          min="0"
        />
      </label>

      <label>
        Description
        <textarea name="description" [(ngModel)]="product.description"></textarea>
      </label>

      <label>
        Image URL
        <input name="imageUrl" [(ngModel)]="product.imageUrl" />
      </label>

      <button type="submit" [disabled]="productForm.invalid">Save</button>
      <button type="button" (click)="cancel()">Cancel</button>
    </form>
  `,
  styles: [
    `
      form {
        display: grid;
        gap: 1rem;
        max-width: 480px;
      }

      label {
        display: grid;
        gap: 0.25rem;
      }

      input,
      textarea {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 4px;
      }

      button {
        width: fit-content;
      }
    `
  ]
})
export class AddProductComponent {
  product: Product = {
    id: 0,
    name: '',
    category: '',
    price: 0,
    stockQuantity: 0,
    description: '',
    imageUrl: ''
  };

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  submit(): void {
    this.productService.addProduct(this.product).subscribe({
      next: () => this.router.navigate(['/']),
      error: (error) => console.error(error)
    });
  }

  cancel(): void {
    this.router.navigate(['/']);
  }
}
