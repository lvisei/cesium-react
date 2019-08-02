import * as Cesium from 'Cesium';

declare module 'Cesium' {
  class Ion {
    static defaultAccessToken: string;
    static defaultServer: string;

    constructor();
  }

  class IonResource {
    constructor(endpoint: Object, endpointResource: Resource);

    static fromAssetId(assetId: Number, options?: { accessToken: String; server: String | Resource }): string;
  }
}
