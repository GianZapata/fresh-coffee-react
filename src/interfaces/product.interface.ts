export interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  available: boolean;
  categoryId: number;
  created_at: string;
  updated_at: string;
  pivot: ProductPivot;
}

interface ProductPivot {
  orderId: number;
  productId: number;
  quantity: number;
  price: string;
}
