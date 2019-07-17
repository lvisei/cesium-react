import React from 'react';
import { Viewer as CesiumViewer } from 'cesium';
import { GeoJsonDataSource, CesiumContext } from 'resium';

interface Iprops {
  geoJsonData: Cesium.Resource;
}

interface ICesiumContext {
  viewer: CesiumViewer;
}

const GeoJson: React.FunctionComponent<Iprops> = ({ geoJsonData }) => {
  console.log('GeoJson render');
  // TODO: define Type
  const cesium: any = React.useContext(CesiumContext);
  return geoJsonData ? (
    <GeoJsonDataSource data={geoJsonData} onLoad={geoJsonData => cesium.viewer.flyTo(geoJsonData)} />
  ) : null;
};

export default React.memo(GeoJson);