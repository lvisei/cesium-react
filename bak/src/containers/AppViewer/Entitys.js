import React, { PureComponent } from 'react';
import { Color, Cartesian3 } from 'cesium';
import { Entity, PointGraphics, EntityDescription } from 'resium';

class Entitys extends PureComponent {
  render() {
    const entityPosition = Cartesian3.fromDegrees(105.0707383, 30.7117244, 100);
    return (
      <Entity name="Sokyo" position={entityPosition}>
        <PointGraphics pixelSize={25} color={Color.CRIMSON} outlineWidth={5} outlineColor={Color.LIGHTCORAL} />
        <EntityDescription>
          <h1>Hello, world.</h1>
          <p>JSX is available here!</p>
        </EntityDescription>
      </Entity>
    );
  }
}

export default Entitys;
