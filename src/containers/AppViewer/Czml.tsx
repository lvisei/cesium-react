import React from 'react';
import Cesium from 'cesium';
import { CzmlDataSource, withCesium } from 'resium';
import { Resource } from '@/stores/modules/appViewer';

interface Iprops {
  cesium?: { viewer: Cesium.Viewer };
  czmlData: Resource;
}

const Czml: React.FunctionComponent<Iprops> = ({ cesium, czmlData }) => {
  console.log('Czml render');
  return czmlData ? (
    <CzmlDataSource data={czmlData} onLoad={CzmlDataSource => cesium!.viewer.flyTo(CzmlDataSource)} />
  ) : null;
};

export default React.memo(withCesium(Czml));
