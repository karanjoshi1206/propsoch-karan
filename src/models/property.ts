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
  isMostLiked:boolean
}
