export interface TourPackageData {
  title: string;
  description: string;
  images: string | any;
  pricing: string;
  availability: string;
  locationFrom: string;
  locationTo: string;
  contactInfo: string;
  userReviews: string;
  relatedContent: string;
}

export interface DynamicTourPackageData {
  id: string;
  title: string;
  description: string;
  destination: string;
  price: number;
  packageImage: string;
  from: string;
  to: string;
  maxUser: number;
}
