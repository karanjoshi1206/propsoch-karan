import { IProperty } from "../models/property";

export const PROPERTY_DATA: IProperty[] = [
  {
    id: 1,
    name: "Property 1",
    description: "This is the description of Property 1",
    price: 1000000,
    images: ["properties/prop1.jpeg", "properties/prop2.jpeg", "properties/prop3.jpeg"],
    views: 100,
    rating: 4,
    startDate: "Apr 5",
    endDate: "Apr 10"
  },
  {
    id: 2,
    name: "Property 2",
    description: "This is the description of Property 2",
    price: 2000000,
    images: ["properties/prop3.jpeg", "properties/prop4.jpeg"],
    views: 200,
    rating: 3,
    startDate: "March 9",
    endDate: "March 15"
  },
  {
    id: 3,
    name: "Property 3",
    description: "This is the description of Property 2",
    price: 2000000,
    images: ["properties/prop3.jpeg", "properties/prop4.jpeg"],
    views: 200,
    rating: 3,
    startDate: "March 1",
    endDate: "March 5"
  }
];
