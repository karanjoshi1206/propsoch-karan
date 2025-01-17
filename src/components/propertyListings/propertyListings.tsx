import { useEffect, useRef, useState } from "react";
import { PROPERTY_DATA } from "../../data/propertyData";
import PropertyCard from "../propertyCard/propertyCard";
import "./style.scss";
import { IProperty } from "../../models/property";

const PropertyListings = () => {
  const [properties, setProperties] = useState<IProperty[]>(PROPERTY_DATA.slice(0, 10));
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const loadMoreProperties = () => {
    console.log("log:: load")
    setTimeout(() => {

      setProperties((prevProperties) => {
        const nextProperties = PROPERTY_DATA.slice(
          prevProperties.length,
          prevProperties.length + 10
        );
        if (nextProperties.length === 0) {
          setHasMore(false); // No more properties to load
        }
        return [...prevProperties, ...nextProperties];
      });
    }, 1000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasMore) {
          loadMoreProperties();
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [hasMore]);

  return (
    <div className="propertySlides_container">
      {properties.map((property, index) => (
        <PropertyCard key={index} {...property} />
      ))}

      {/* Loader element */}
      {hasMore && <div ref={observerRef} className="loader">Loading more properties...</div>}
      {!hasMore && (
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      )}
    </div>
  );
};

export default PropertyListings;
