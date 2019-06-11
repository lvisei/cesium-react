import React from 'react';
import { GeoJsonDataSource, withCesium } from 'resium';

const GeoJson = ({ cesium, geoJsonData }) => {
  return geoJsonData ? (
    <GeoJsonDataSource data={geoJsonData} onLoad={geoJsonData => cesium.viewer.flyTo(geoJsonData)} />
  ) : null;
};

export default withCesium(GeoJson);
