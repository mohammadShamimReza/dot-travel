export interface IMeta {
  limit: number;
  page: number;
  total: number;
}

export type ResponseSuccessType = {
  status: number;
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};






export interface IPackage {
  id: string;
  title: string;
  description: string;
  price: number;
  from: string;
  to: string;
  status: string;
  packageImage: string;
  maxUser: number;
  destination: string;
  packageReviewAndRating: IPackageReviewAndRating;
  bookedPackage: IBookPackage[];
  addToCartPackage: IAddToCartPackage[];
}

export interface IPackageReviewAndRating {
  id: string;
  packageId: string;
  rating: string;
  review: string;
  user: ICustomer;
  userId: string;
}

export interface IFaq {
  id: string;
  title: string;
  description: string;
}

export interface IBlog {
  id: string;
  title: string;
  description: string;
}

export interface ICustomer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  role: string;
  address: string;
  profileImage: string;
}

export interface IBookPackage {
  id: string;
  userId: string;
  packageId: string;
  package: IPackage;
  user: ICustomer;
}

export interface IAddToCartPackage {
  id: string;
  userId: string;
  packageId: string;
  package: IPackage;
}