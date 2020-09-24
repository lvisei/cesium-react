// import 'cesium-tdt/dist/cesiumTdt.js';
import { UrlTemplateImageryProvider, WebMercatorTilingScheme } from 'cesium';

// 三维服务 http://lbs.tianditu.gov.cn/docs/#/sanwei/

const token = 'e60679f6e9718d3426f745fd8cd94cbd';
// 服务域名
const tdtUrl = 'https://t{s}.tianditu.gov.cn/';
// 服务负载子域
const subdomains = ['0', '1', '2', '3', '4', '5', '6', '7'];

export const td_img_imageryProvider = {
  url: `https://t0.tianditu.gov.cn/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=${token}`,
  layer: 'tdtBasicLayer',
  style: 'default',
  format: 'image/jpeg',
  tileMatrixSetID: 'GoogleMapsCompatible',
  maximumLevel: 18,
};
export const td_cia_imageryProvider = {
  url: `https://t0.tianditu.gov.cn/cia_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg&tk=${token}`,
  layer: 'tdtAnnoLayer',
  style: 'default',
  format: 'image/jpeg',
  tileMatrixSetID: 'GoogleMapsCompatible',
  maximumLevel: 18,
};

// 影像服务
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const imgMap = new UrlTemplateImageryProvider({
  url: tdtUrl + 'DataServer?T=img_w&x={x}&y={y}&l={z}&tk=' + token,
  subdomains: subdomains,
  tilingScheme: new WebMercatorTilingScheme(),
  maximumLevel: 18,
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const imgAnnoMap = new UrlTemplateImageryProvider({
  url: tdtUrl + 'DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=' + token,
  subdomains: subdomains,
  tilingScheme: new WebMercatorTilingScheme(),
  maximumLevel: 18,
});

// 国界服务
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const iboMap = new UrlTemplateImageryProvider({
  url: tdtUrl + 'DataServer?T=ibo_w&x={x}&y={y}&l={z}&tk=' + token,
  subdomains: subdomains,
  tilingScheme: new WebMercatorTilingScheme(),
  maximumLevel: 10,
});

// 地形服务
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const terrainUrls = subdomains.map((item) => tdtUrl.replace('{s}', item) + 'mapservice/swdx?tk=' + token);

// const provider = new Cesium!.GeoTerrainProvider({
//   urls: terrainUrls,
// });
