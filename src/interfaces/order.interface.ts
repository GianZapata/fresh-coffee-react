export interface IOrder {
  id: number;
  created_at: string;
  isPaid: boolean;
  numberOfItems: number;
  subTotal: number;
  tax: number;
  total: number;
  updated_at: string;
  userId: number;
}
