import { IProperty } from "../../models/property";
import Map from "../map/Map";
import "./style.scss";
function convertToCrores(amount: number) {
  if (amount >= 10000000) {
    const crores = amount / 10000000;
    return crores + " Cr";
  } else {
    const lakhs = amount / 100000;
    return lakhs + " L";
  }
}

const PropertyInfo = ({ property }: { property: IProperty }) => {
  const location = {
    address: property.address,
    lat: property.lat,
    lng: property.lng
  };
  return (
    <div className="propertyInfoContainer">
      <div className="propertyInfoContainer-top">
        <div className="propertyInfoContainer-top__left">{property.isMostLiked && <span>Most Liked</span>}</div>

        <img src={`/${property.images[0]}`} alt="" />
      </div>
      <div className="propertyInfoContainer-info">
        <div className="propertyInfoContainer-info__item">
          <h5 className="propertyInfoContainer-info__item-title">{property.name}</h5>
          <div className="propertyInfoContainer-info__item-subtitle">
            <span>
              <img src="/icons/location-dark.svg" alt="" />
            </span>{" "}
            <span>{property.location}</span>
          </div>
        </div>
        <div className="propertyInfoContainer-info__item">
          <h5 className="propertyInfoContainer-info__item-title">{convertToCrores(property.price)}</h5>
          <div className="propertyInfoContainer-info__item-subtitle">EMI Available</div>
        </div>
      </div>
      <div className="propertyInfoContainer-location">
        <h6> Location</h6>
        <div className="propertyInfoContainer-location__address">
          <img src="/icons/location-bg.svg" alt="" />
          <p>{property.address}</p>
        </div>

        <div className="propertyInfoContainer-location__map">
          <Map {...location} />
        </div>
        <div className="propertyInfoContainer-location__nearby">
          {property?.nearBy &&
            Object.keys(property.nearBy).map((key, index) => {
              return (
                <div key={index} className="propertyInfoContainer-location__nearby__item amennety-item">
                  <span>
                    {property?.nearBy?.[key] ?? ""} {key}
                  </span>
                </div>
              );
            })}
        </div>

        {property.ammenties?.length && property.ammenties?.length > 0 && (
          <div className="propertyInfoContainer-location__popular">
            <h6>Property Ammenties</h6>
            <div className="propertyInfoContainer-location__nearby">
              {property?.ammenties?.map((item, index) => {
                return (
                  <div key={index} className={`propertyInfoContainer-location__nearby__items__item amennety-item ${index === 0 ? "active" : ""}`}>
                    <span>{item}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyInfo;
