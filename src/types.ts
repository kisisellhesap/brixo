export interface Feature {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface Review {
  id: number;
  user: string;
  comment: string;
  rating: number;
  createdAt: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  tags: string[];
  images: string[];
  thumbnail: string;
  availabilityStatus: string;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  weight: number;
  minimumOrderQuantity: number;
  shippingInformation: string;
  returnPolicy: string;
  warrantyInformation: string;
  sku: string;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  reviews: Review[];
}
