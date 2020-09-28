import React from 'react';
import { WebMapTileServiceImageryProvider } from 'cesium';
import { ImageryLayer } from 'resium';
import memoize from 'memoize-one';

const imageryProvider = memoize((imageryProvider) => new WebMapTileServiceImageryProvider(imageryProvider));

interface Iprops {
  imageryProviders: WebMapTileServiceImageryProvider.ConstructorOptions[];
}

const ImageryLayers: React.FunctionComponent<Iprops> = ({ imageryProviders }) => {
  console.log('ImageryLayers render');
  // const imageryProvider = useMemo(() => new WebMapTileServiceImageryProvider({ url }), [url]);

  return (
    <>
      {imageryProviders.map((item, i) => {
        return <ImageryLayer key={i} imageryProvider={imageryProvider(item)} />;
      })}
    </>
  );
};

export default React.memo(
  ImageryLayers,
  (prevProps, nextProps) => prevProps.imageryProviders === nextProps.imageryProviders
);
