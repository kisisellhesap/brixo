export interface Feature {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  size: string;
  tags: string[];
  gender: 'men' | 'women' | 'unisex';
  dimensions: Dimensions;
  images: Images;
  discountPercentage: number;
  rating: number;
  stock: number;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: 'In Stock' | 'Out of Stock' | 'Low Stock';
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  more: MoreDetails;
}

export interface ProductWithAmount extends Product {
  amount: number;
}

export interface Dimensions {
  sleeveLength: number;
  bust: number;
  length: number;
}

export interface Images {
  front: string;
  back: string;
  brand: string;
}

export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface MoreDetails {
  sku: string;
  brand: string;
  condition: 'NEW' | 'GREAT' | 'GOOD' | 'FAIR';
  moreInformation: string;
  fabric: string;
}

export interface Order {
  orderId: string;
  products: ProductWithAmount[]; // You can define this based on your product structure
  totalAmount: number;
  orderDate: string; // ISO format: "2025-04-19T15:30:00Z"
  paymentStatus: 'Paid' | 'Pending' | 'Failed';
  cardInformation: {
    cardNumber: string;
    expiryDate: string;
    cvc: string;
  };
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone?: string;
  birthDate?: string;

  addresses: '';
  orders: Order[] | null;
  myCart: ProductWithAmount[] | null;
  wishlist: string[];

  createdAt: string;
  status: 'active' | 'suspended' | 'banned';
  role: 'user' | 'admin';
}

export interface SignUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
