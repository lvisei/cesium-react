import { observable, action } from 'mobx';

const cesiumAccessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyMWQ3MWM4Yy01ZGZjLTRkZGEtYjJhMi1hMDdkYWZhN2I2YWYiLCJpZCI6NTc3Nywic2NvcGVzIjpbImFzbCIsImFzciIsImdjIl0sImlhdCI6MTU2MTUzNDQwMX0.h8scGb5fMjG2UFsqvXpQL7YvCheiI-YWUQUyBcQym5s';
const td_img_imageryProvider = {
  url:
    'http://t0.tianditu.gov.cn/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=e60679f6e9718d3426f745fd8cd94cbd',
  layer: 'tdtBasicLayer',
  style: 'default',
  format: 'image/jpeg',
  tileMatrixSetID: 'GoogleMapsCompatible',
  maximumLevel: 18
};
const td_cia_imageryProvider = {
  url:
    'http://t0.tianditu.gov.cn/cia_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg&tk=e60679f6e9718d3426f745fd8cd94cbd',
  layer: 'tdtAnnoLayer',
  style: 'default',
  format: 'image/jpeg',
  tileMatrixSetID: 'GoogleMapsCompatible',
  maximumLevel: 18
};

type Resource = string | object | Cesium.Resource | undefined;

interface IPosition {
  long: number | undefined;
  lat: number | undefined;
  height: number | undefined;
  elevation: number | undefined;
}

class AppViewer {
  cesiumAccessToken = cesiumAccessToken;
  td_img_imageryProvider = td_img_imageryProvider;
  td_cia_imageryProvider = td_cia_imageryProvider;
  imageryProviders = [td_img_imageryProvider, td_cia_imageryProvider];

  @observable.ref czmlData: Resource;
  @observable.ref geoJsonData: Resource;
  @observable.shallow destination: number | undefined;
  @observable positionData: IPosition;

  constructor() {
    this.positionData = {
      long: 0,
      lat: 0,
      height: 0,
      elevation: 0
    };
  }

  @action
  setDestination = (destination: number | undefined) => (this.destination = destination);

  setCzmlData = (czmlData: Resource) => (this.czmlData = czmlData);

  setGeoJsonData = (geoJsonData: Resource) => (this.geoJsonData = geoJsonData);

  setPositionData = (positionData: IPosition) => (this.positionData = positionData);
}

export default new AppViewer();
