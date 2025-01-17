import { useEffect, useState } from "react";
import PropertyCard from "../propertyCard/propertyCard";
import { IProperty } from "../../models/property";
import { PROPERTY_DATA } from "../../data/propertyData";
import "../propertyListings/style.scss";
import "./style.scss"
const WishListProperties = () => {
  const [wishListProperties, setWishListProperties] = useState<IProperty[]>([]);

  const checkWishList = () => {
    const wishList = JSON.parse(localStorage.getItem("likedProperties") || "[]");
    const wishListProperties = PROPERTY_DATA.filter((property) => wishList.includes(property.id));
    setWishListProperties(wishListProperties);
  };

  useEffect(() => {
    checkWishList();
  }, []);

  if (wishListProperties.length === 0) {
    return (
      <div className="noData">
        <h3>No properties in your wishlist</h3>
        <p>Go to the listings page and click on the heart icon to add properties to your wishlist</p>
      </div>
    );
  }

  return (
    <div className="propertySlides_container">
      {wishListProperties.map((item) => {
        return <PropertyCard {...item} />;
      })}
    </div>
  );
};

export default WishListProperties;
