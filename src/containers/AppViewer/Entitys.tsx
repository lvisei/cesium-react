import React from 'react';
import { Color, Cartesian3 } from 'cesium';
import { Entity, PointGraphics, EntityDescription } from 'resium';

const Entitys = () => {
  const entityPosition = Cartesian3.fromDegrees(104.0707383, 30.7117244, 100);
  console.log('Entitys render');
  return (
    <Entity name="成都" position={entityPosition}>
      <PointGraphics pixelSize={3} color={Color.CRIMSON} outlineWidth={1} outlineColor={Color.LIGHTCORAL} />
      <EntityDescription>
        <h1>Hello, world.</h1>
        <p>成都!</p>
      </EntityDescription>
    </Entity>
  );
};

export default React.memo(Entitys);
