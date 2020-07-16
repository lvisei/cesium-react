import { observable, action } from 'mobx';

const cesiumAccessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyMWQ3MWM4Yy01ZGZjLTRkZGEtYjJhMi1hMDdkYWZhN2I2YWYiLCJpZCI6NTc3Nywic2NvcGVzIjpbImFzbCIsImFzciIsImdjIl0sImlhdCI6MTU2MTUzNDQwMX0.h8scGb5fMjG2UFsqvXpQL7YvCheiI-YWUQUyBcQym5s';
const td_img_imageryProvider = {
  url:
    'https://t0.tianditu.gov.cn/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=e60679f6e9718d3426f745fd8cd94cbd',
  layer: 'tdtBasicLayer',
  style: 'default',
  format: 'image/jpeg',
  tileMatrixSetID: 'GoogleMapsCompatible',
  maximumLevel: 18,
};
const td_cia_imageryProvider = {
  url:
    'https://t0.tianditu.gov.cn/cia_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg&tk=e60679f6e9718d3426f745fd8cd94cbd',
  layer: 'tdtAnnoLayer',
  style: 'default',
  format: 'image/jpeg',
  tileMatrixSetID: 'GoogleMapsCompatible',
  maximumLevel: 18,
};

export type Resource = string | object | Cesium.Resource | undefined;

export type WebMapTileServiceImagery = {
  url: string;
  format?: string;
  layer: string;
  style: string;
  tileMatrixSetID: string;
  tileMatrixLabels?: any[];
  clock?: Cesium.Clock;
  times?: Cesium.TimeIntervalCollection;
  dimensions?: any;
  tileWidth?: number;
  tileHeight?: number;
  tilingScheme?: Cesium.TilingScheme;
  rectangle?: Cesium.Rectangle;
  minimumLevel?: number;
  maximumLevel?: number;
  ellipsoid?: Cesium.Ellipsoid;
  credit?: Cesium.Credit | string;
  subdomains?: string | string[];
};

type Destination = Cesium.Cartesian3 | Cesium.Rectangle | undefined;

interface IPosition {
  long: number | string;
  lat: number | string;
  height: number;
  elevation: number;
}

export interface IAppViewerState {
  cesiumAccessToken: string;
  td_img_imageryProvider: WebMapTileServiceImagery;
  td_cia_imageryProvider: WebMapTileServiceImagery;
  imageryProviders: WebMapTileServiceImagery[];
  czmlData: Resource;
  geoJsonData: Resource;
  destination: Destination;
  positionData: IPosition;
}

export class AppViewer implements IAppViewerState {
  public cesiumAccessToken = cesiumAccessToken;
  public td_img_imageryProvider = td_img_imageryProvider;
  public td_cia_imageryProvider = td_cia_imageryProvider;
  public imageryProviders = [td_img_imageryProvider, td_cia_imageryProvider];

  @observable.ref public czmlData: Resource;
  @observable.ref public geoJsonData: Resource;
  @observable.shallow public destination: Destination;
  @observable public positionData: IPosition;

  constructor() {
    this.positionData = {
      long: 0,
      lat: 0,
      height: 0,
      elevation: 0,
    };
  }

  @action
  setDestination = (destination: Destination): void => {
    this.destination = destination;
  };

  @action
  setCzmlData = (czmlData: Resource): void => {
    this.czmlData = czmlData;
  };

  @action
  setGeoJsonData = (geoJsonData: Resource): void => {
    this.geoJsonData = geoJsonData;
  };

  @action
  setPositionData = (positionData: IPosition): void => {
    this.positionData = positionData;
  };
}

export default new AppViewer();
