import { Map as PMap, Marker } from "pigeon-maps";
import "./style.scss";
import { ILocation } from "../../models/property";

const Map = ({ lat, lng }: ILocation) => {
  return (
    <div className="map">
      <PMap defaultCenter={[lat, lng]} defaultZoom={10}>
        <Marker width={50} anchor={[lat, lng]} />
      </PMap>
      <div className="map-bottom">View on map</div>
    </div>
  );
};

export default Map;
