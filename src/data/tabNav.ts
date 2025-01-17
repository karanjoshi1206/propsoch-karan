import { ITabNav } from "../models/navigation";

export const TAB_NAV_LINKS: ITabNav[] = [
  {
    icon: "menu-search.svg",
    title: "Explore",
    isActive: false,
    path: "/"
  },
  {
    icon: "menu-heart.svg",
    title: "Wishlists",
    isActive: false,
    path: "/wishlist"
  },
  {
    icon: "menu-location.svg",
    title: "Show map",
    isActive: false,
    path: "/map"
  },
  {
    icon: "menu-profile.svg",
    title: "Login",
    isActive: false,
    path: "/login"
  }
];
