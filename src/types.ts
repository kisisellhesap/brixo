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
  gender: "men" | "women" | "unisex";
  dimensions: Dimensions;
  images: Images;
  discountPercentage: number;
  rating: number;
  stock: number;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: "In Stock" | "Out of Stock" | "Low Stock";
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  more: MoreDetails;
}

export interface ProductWithAmount {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  size: string;
  tags: string[];
  gender: "men" | "women" | "unisex";
  dimensions: Dimensions;
  images: Images;
  discountPercentage: number;
  rating: number;
  stock: number;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: "In Stock" | "Out of Stock" | "Low Stock";
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  more: MoreDetails;
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
  condition: "NEW" | "GREAT" | "GOOD" | "FAIR";
  moreInformation: string;
  fabric: string;
}

// Users

export interface Address {
  title: "Home" | "Work" | string;
  firstName: string;
  lastName: string;
  phone: string;
  addressLine: string;
  city: string;
  district: string;
  postalCode: string;
  country: string;
}

export interface Order {
  orderId: string;
  products: ProductWithAmount[]; // You can define this based on your product structure
  totalAmount: number;
  orderDate: string; // ISO format: "2025-04-19T15:30:00Z"
  paymentStatus: "Paid" | "Pending" | "Failed";
  deliveryStatus: "Processing" | "Shipped" | "Delivered" | "Canceled";
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone?: string;
  birthDate?: string;

  addresses: Address[];
  orders: Order[];
  wishlist: string[]; // Array of product IDs

  createdAt: string;
  status: "active" | "suspended" | "banned";
  role: "user" | "admin";
}

export interface SignUser {
  id: string;
  email: string;
  password: string;
}
