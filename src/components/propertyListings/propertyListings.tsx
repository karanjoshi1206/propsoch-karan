import { PROPERTY_DATA } from "../../data/propertyData";
import PropertyCard from "../propertyCard/propertyCard";
import "./style.scss";

const PropertyListings = () => {
  return (
    <div className="propertySlides_container">
      {PROPERTY_DATA.map((property) => (
        <PropertyCard {...property} />
      ))}
    </div>
  );
};

export default PropertyListings;
