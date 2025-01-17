export interface IProperty {
  id: number;
  name: string;
  description?: string;
  price: number;
  images: string[];
  views: number;
  rating: number;
  startDate: string;
  endDate: string;
  isMostLiked: boolean;
  location?: string;
  address: string;
  lat: number;
  lng: number;
  nearBy?: INearBy;
  ammenties?: string[];
}

export interface ILocation {
  address: string;
  lat: number;
  lng: number;
}

export interface INearBy {
  [key: string]: number;
}
