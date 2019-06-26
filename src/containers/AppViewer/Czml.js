import React from 'react';
import { CzmlDataSource, withCesium } from 'resium';

const Czml = ({ cesium, czmlData }) => {
  console.log('Czml render');
  return czmlData ? (
    <CzmlDataSource data={czmlData} onLoad={CzmlDataSource => cesium.viewer.flyTo(CzmlDataSource)} />
  ) : null;
};

export default React.memo(withCesium(Czml));
