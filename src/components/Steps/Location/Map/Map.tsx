import React, { useEffect, useState } from "react";
import { Map, Placemark, YMaps } from "react-yandex-maps";
import mark from "../../../../assets/images/map/mark.svg";
import classes from "./Map.module.scss";
import { useDispatch } from "react-redux";
import { yandexKey } from "../../../../api/constants";
import { useAppSelector } from "../../../../hooks/redux/redux-hooks";
import { IPoint } from "../../../../Interfaces/PointInterfaces";
import { formActions } from "../../../../store/Slices/FormSlice";
import { RootState } from "../../../../store/store";

const mapProperties = {
  iconLayout: "default#image",
  iconImageSize: [16, 16],
  iconImageHref: mark,
};
const mapStateToProps = (state: RootState) => ({
  points: state.location.points.data,
  city: state.form.city.name,
  point: state.form.point.name,
});
const CustomMap = () => {
  const dispatch = useDispatch();

  const [ymap, setYmap] = useState<any>(null);
  const [zoom, setZoom] = React.useState(10);
  const [coordinates, setCoordinates] = useState<any>(null);
  const [center, setCenter] = useState([54.314192, 48.403132]);
  const { city, point, points } = useAppSelector(mapStateToProps);

  const getCoordinates = async (address: string) => {
    if (ymap) {
      const geocoder = await ymap.geocode(address);
      const firstGeoObject = geocoder.geoObjects.get(0);
      return firstGeoObject.geometry.getCoordinates();
    }
  };

  const changeMapCenter = async (address: string, isCity = false) => {
    isCity ? setZoom(12) : setZoom(16);
    const coords = await getCoordinates(address);
    setCenter(coords);
  };

  const mapState = React.useMemo(
    () => ({ center: center, zoom }),
    [zoom, center]
  );

  const init = (ymap: any) => {
    setYmap(ymap);
  };

  const getPoints = async (points: IPoint[]) => {
    const newCoordinates = [];
    for (const item of points) {
      const newCoordinate = await getCoordinates(city + "," + item.address);
      newCoordinates.push({ newCoordinate: newCoordinate, point: item });
    }
    setCoordinates(newCoordinates);
  };

  useEffect(() => {
    !point && city && changeMapCenter(city, true);
    point && changeMapCenter(city + "," + point);
  }, [point]);

  useEffect(() => {
    points && getPoints(points);
    city && changeMapCenter(city, true);
  }, [points]);

  return (
    <div className={classes.mapContainer}>
      <div>
        <YMaps
          query={{
            ns: "use-load-option",
            apikey: yandexKey,
            load: "geocode",
          }}
        >
          <Map
            state={mapState}
            className={classes.mapInner}
            onLoad={(ymaps) => init(ymaps)}
          >
            {coordinates &&
              coordinates?.map((coordinate: any, index: string) => (
                <Placemark
                  key={index}
                  geometry={coordinate.newCoordinate}
                  options={mapProperties}
                  onClick={() => {
                    dispatch(
                      formActions.setPoint({
                        name: coordinate.point.address,
                        id: coordinate.point.id,
                      })
                    );
                  }}
                />
              ))}
          </Map>
        </YMaps>
      </div>
    </div>
  );
};

export default CustomMap;
