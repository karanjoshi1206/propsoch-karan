import { useEffect, useState } from "react";
import { IProperty } from "../../models/property";
import Slides from "../slides/slides";
import "./style.scss";
import { useNavigate } from "react-router-dom";

const renderData = (data: any) => {
  return <img src={`/${data}`} alt="property" />;
};

const PropertyCard = ({ endDate, id, images, name, rating, startDate, views, isMostLiked }: IProperty) => {
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();

  const onWishlistClick = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
    const likedProperties = localStorage.getItem("likedProperties");
    let likedPropertiesArray = [];
    if (likedProperties) {
      likedPropertiesArray = JSON.parse(likedProperties);
      if (likedPropertiesArray.includes(id)) {
        likedPropertiesArray = likedPropertiesArray.filter((item: number) => item !== id);
      } else {
        likedPropertiesArray.push(id);
      }
    } else {
      likedPropertiesArray.push(id);
    }
    localStorage.setItem("likedProperties", JSON.stringify(likedPropertiesArray));
  };

  useEffect(() => {
    if (localStorage.getItem("likedProperties") && JSON.parse(localStorage.getItem("likedProperties") as string).includes(id)) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [id]);

  const handleNavigation = () => {
    navigate(`/property/${id}`);
  };

  return (
    <div onClick={handleNavigation} className="propertyCard">
      <div className="propertyCard__header">
        <div className="propertyCard__header-left">{isMostLiked && <span>Most Liked</span>}</div>
        <div onClick={(e) => onWishlistClick(e, id)} className="propertyCard__header-right">
          {isLiked ? <img src="/icons/heart-red.svg" alt="Like" /> : <img src="/icons/heart.svg" alt="Like" />}
        </div>
      </div>
      <div className="propertyCard__imageContainer">
        <Slides data={images} renderData={renderData} />
      </div>
      <div className="propertyCard__stats">
        <div className="propertyCard__stats-item">
          <img src="/icons/show.svg" alt="" />
          <span className="propertyCard__stats-item__views">{views.toLocaleString()}</span>
        </div>
        <div className="propertyCard__stats-item">
          {rating > 4 ? <img src="/icons/star-green.svg" alt="ratings" /> : <img src="/icons/star-orange.svg" alt="ratings" />}
          <span className={`propertyCard__stats-item__ratings ${rating > 4 ? "good" : "average"}`}>{rating}</span>
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
