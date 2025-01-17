import { useParams } from "react-router-dom";
import { PROPERTY_DATA } from "../data/propertyData";
import PropertyInfo from "../components/propertyInfo/propertyInfo";

const PropertyDetails = () => {
  const params = useParams();
  const propertyId = params?.id;
  const property = PROPERTY_DATA.find((property) => property.id === Number(propertyId));

  if (!property) {
    return <div>Property not found</div>;
  }
  // return <h1>hello</h1>
  return <PropertyInfo property={property} />;
};

export default PropertyDetails;
