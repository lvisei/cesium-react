import React from 'react';
import { GeoJsonDataSource, CesiumContext } from 'resium';

const GeoJson = ({ geoJsonData }) => {
  console.log('GeoJson render');
  const cesium = React.useContext(CesiumContext);
  return geoJsonData ? (
    <GeoJsonDataSource data={geoJsonData} onLoad={geoJsonData => cesium.viewer.flyTo(geoJsonData)} />
  ) : null;
};

export default React.memo(GeoJson);
