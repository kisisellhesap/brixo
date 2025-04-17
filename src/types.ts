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
