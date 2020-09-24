import React from 'react';
import { Viewer as CesiumViewer, Resource } from 'cesium';
import { GeoJsonDataSource, Context, useCesium } from 'resium';

interface Iprops {
  geoJsonData: string | object | Resource | undefined;
}

interface ICesiumContext {
  viewer: CesiumViewer;
}

const GeoJson: React.FunctionComponent<Iprops> = ({ geoJsonData }) => {
  console.log('GeoJson render');
  // const cesium = React.useContext<ICesiumContext>(CesiumContext);
  const context: Context = useCesium();
  return geoJsonData ? (
    <GeoJsonDataSource data={geoJsonData} onLoad={(geoJsonData) => context.viewer!.flyTo(geoJsonData)} />
  ) : null;
};

export default React.memo(GeoJson);
