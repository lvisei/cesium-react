import React from 'react';
import { Viewer as CesiumViewer } from 'cesium';
import { GeoJsonDataSource, Context, useCesium } from 'resium';
import { Resource } from '@/stores/modules/appViewer';

interface Iprops {
  geoJsonData: Resource;
}

interface ICesiumContext {
  viewer: CesiumViewer;
}

const GeoJson: React.FunctionComponent<Iprops> = ({ geoJsonData }) => {
  console.log('GeoJson render');
  // const cesium = React.useContext<ICesiumContext>(CesiumContext);
  const context = useCesium<Context>();
  return geoJsonData ? (
    <GeoJsonDataSource data={geoJsonData} onLoad={(geoJsonData) => context.viewer!.flyTo(geoJsonData)} />
  ) : null;
};

export default React.memo(GeoJson);
