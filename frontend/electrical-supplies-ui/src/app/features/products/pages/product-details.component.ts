import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ActivatedRoute,
  Router,
  RouterModule
} from '@angular/router';

import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
    <div *ngIf="product">

      <h1>{{ product.name }}</h1>

      <p>
        <strong>Category:</strong>
        {{ product.category }}
      </p>

      <p>
        <strong>Price:</strong>
        ₹{{ product.price }}
      </p>

      <p>
        <strong>Stock:</strong>
        {{ product.stockQuantity }}
      </p>

      <p>
        {{ product.description }}
      </p>

      <br>

      <a [routerLink]="['/edit-product', product.id]">
        <button>Edit</button>
      </a>

      <button (click)="deleteProduct()">
        Delete
      </button>

    </div>
  `
})
export class ProductDetailsComponent implements OnInit {

  product?: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {

    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.productService
      .getProduct(id)
      .subscribe({

        next: (data) => {
          this.product = data;
        },

        error: (err) => {
          console.error(err);
        }
      });
  }

  deleteProduct(): void {

    if (!this.product) return;

    this.productService
      .deleteProduct(this.product.id)
      .subscribe(() => {

        this.router.navigate(['/']);
      });
  }
}