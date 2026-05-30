export interface Product {
  productId: number;
  productName: string;
  category?: string;
  quantity: number;
  unitPrice: number;
  supplierName?: string;
  createdAt: Date;
}