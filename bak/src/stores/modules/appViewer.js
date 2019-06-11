import { observable, action } from 'mobx';

const cesiumAccessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiOGQ2NzAwYS05MDY4LTRmYzMtYTcxZi0wNjNiYmE3MGM5OWYiLCJpZCI6NTc3Nywic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTU0NDE1MzY1NH0.wVfPywSemmFgFwPErzK5ovEqAcrXFNsfr59leudVLsI';
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
const geoJsonData = null;
const czmlData = null;
const destination = null;
const positionData = null;

class AppViewer {
  cesiumAccessToken = cesiumAccessToken;
  td_img_imageryProvider = td_img_imageryProvider;
  td_cia_imageryProvider = td_cia_imageryProvider;
  imageryProviders = [td_img_imageryProvider, td_cia_imageryProvider]

  @observable czmlData = czmlData;
  @observable geoJsonData = geoJsonData;
  @observable destination = destination;
  @observable positionData = positionData;

  @action
  setDestination = destination => (this.destination = destination);
  @action
  setCzmlData = czmlData => (this.czmlData = czmlData);
  @action
  setGeoJsonData = geoJsonData => (this.geoJsonData = geoJsonData);
  @action
  setPositionData = positionData => (this.positionData = positionData);
}

export default new AppViewer();
