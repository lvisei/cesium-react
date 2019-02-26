import React, { Component } from 'react';
import { CzmlDataSource, withCesium } from 'resium';

const Czml = ({ cesium, czmlData }) => {
  return czmlData ? (
    <CzmlDataSource data={czmlData} onLoad={CzmlDataSource => cesium.viewer.flyTo(CzmlDataSource)} />
  ) : null;
};

export default withCesium(Czml);
