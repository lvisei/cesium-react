import React from 'react';
import { WebMapTileServiceImageryProvider } from 'cesium';
import { ImageryLayer } from 'resium';
import memoize from 'memoize-one';
import { WebMapTileServiceImagery } from '@/stores/modules/appViewer';

const imageryProvider = memoize((imageryProvider) => new WebMapTileServiceImageryProvider(imageryProvider));

const ImageryLayers = React.memo(
  ({ imageryProviders }: { imageryProviders: WebMapTileServiceImagery[] }) => {
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
