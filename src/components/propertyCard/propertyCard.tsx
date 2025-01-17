import { IProperty } from "../../models/property";
import Slides from "../slides/slides";
import "./style.scss";

const renderData = (data: any) => {
  return <img src={`/${data}`} alt="property" />;
};

const PropertyCard = ({ endDate, id, images, name, price, rating, startDate, views, description, isMostLiked }: IProperty) => {
  console.log(id, price, views, description)
  return (
    <div className="propertyCard">
      <div className="propertyCard__header">
        <div className="propertyCard__header-left">
          {
            isMostLiked &&
            <span>Most Liked</span>
          }
        </div>
        <div className="propertyCard__header-right">
          <img src="/icons/heart.svg" alt="Like" />
        </div>
      </div>
      <div className="propertyCard__imageContainer">
        <Slides data={images} renderData={renderData} />
      </div>
      <div className="propertyCard__stats">
        <div className="propertyCard__stats-item">
          <span>
            <img src="/icons/show.svg" alt="" />
          </span>
          <span className="propertyCard__stats-left__views">41,172</span>
        </div>
        <div className="propertyCard__stats-item">
          <span>
            <img src="/icons/star-orange.svg" alt="ratings" />
          </span>
          <span className="propertyCard__stats-right__ratings">{rating}</span>
        </div>
      </div>

      <div className="propertyCard__info">
        <h3 className="propertyCard__info-title">{name}</h3>
        <p className="propertyCard__info-date">
          {startDate} - {endDate}
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
