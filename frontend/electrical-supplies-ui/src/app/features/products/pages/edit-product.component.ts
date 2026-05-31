import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <h1>Edit Product</h1>

    <form
      *ngIf="productForm"
      [formGroup]="productForm"
      (ngSubmit)="onSubmit()">

      <input type="text" formControlName="name">

      <input type="text" formControlName="category">

      <input type="number" formControlName="price">

      <input type="number" formControlName="stockQuantity">

      <textarea formControlName="description"></textarea>

      <button type="submit">
        Update Product
      </button>

    </form>
  `
})
export class EditProductComponent implements OnInit {

  productForm!: FormGroup;

  productId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {

    this.productId = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.productService
      .getProduct(this.productId)
      .subscribe((product: Product) => {

        this.productForm = this.fb.group({
          id: [product.id],
          name: [product.name],
          category: [product.category],
          price: [product.price],
          stockQuantity: [product.stockQuantity],
          description: [product.description],
          imageUrl: [product.imageUrl]
        });
      });
  }

  onSubmit(): void {

    this.productService
      .updateProduct(this.productForm.value)
      .subscribe(() => {

        this.router.navigate(['/']);
      });
  }
}