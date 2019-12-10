// eslint-disable-next-line
import * as Cesium from 'Cesium';

declare module 'Cesium' {
  // eslint-disable-next-line
  class Ion {
    static defaultAccessToken: string;
    static defaultServer: string;

    constructor();
  }
  // eslint-disable-next-line
  class IonResource {
    constructor(endpoint: Object, endpointResource: Resource);

    static fromAssetId(assetId: Number, options?: { accessToken: String; server: String | Resource }): string;
  }
}
