export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}
export interface Property {
  id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  description: string;
  location?: string;
}
export interface BookingData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  billingAddress: string;
}
export interface Review {
  id: string;
  comment: string;
  rating?: number;
  author?: string;
  createdAt?: string;
}
