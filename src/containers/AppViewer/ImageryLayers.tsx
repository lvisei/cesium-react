import React from 'react';
import { WebMapTileServiceImageryProvider } from 'cesium';
import { ImageryLayer } from 'resium';
import memoize from 'memoize-one';

const imageryProvider = memoize((imageryProvider) => new WebMapTileServiceImageryProvider(imageryProvider));

const ImageryLayers = React.memo(
  ({ imageryProviders }: { imageryProviders: WebMapTileServiceImageryProvider.ConstructorOptions[] }) => {
    console.log('ImageryLayers render');
    return (
      <>
        {/* <ImageryLayerCollection> */}
        {imageryProviders.map((item, i) => {
          return <ImageryLayer key={i} imageryProvider={imageryProvider(item)} />;
        })}
        {/* </ImageryLayerCollection> */}
      </>
    );
  },
  (prevProps, nextProps) => prevProps.imageryProviders === nextProps.imageryProviders
);

export default ImageryLayers;
