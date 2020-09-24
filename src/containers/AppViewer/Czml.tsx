import React from 'react';
import { Viewer, Resource } from 'cesium';
import { CzmlDataSource, withCesium } from 'resium';

interface Iprops {
  cesium?: { viewer: Viewer };
  czmlData: string | object | Resource | undefined;
}

const Czml: React.FunctionComponent<Iprops> = ({ cesium, czmlData }) => {
  console.log('Czml render');
  return czmlData ? (
    <CzmlDataSource data={czmlData} onLoad={(CzmlDataSource) => cesium!.viewer.flyTo(CzmlDataSource)} />
  ) : null;
};

export default React.memo(withCesium(Czml));
