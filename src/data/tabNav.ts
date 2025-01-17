import { ITabNav } from "../models/navigation";

export const TAB_NAV_LINKS: ITabNav[] = [
    {
        icon: "menu-search.svg",
        title: "Explore",
        isActive: true,
        path: "/explore"
    },
    {
        icon: "menu-heart.svg",
        title: "Wishlists",
        isActive: false,
        path: "/explore"
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
]