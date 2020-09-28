import { observable, action } from 'mobx';
import { Cartesian3, Rectangle, Resource, WebMapTileServiceImageryProvider } from 'cesium';
import { td_img_imageryProvider, td_cia_imageryProvider } from '@/helpers/tdt-service';

type CesiumResource = string | object | Resource | undefined;
type Destination = Cartesian3 | Rectangle | undefined;
interface IPosition {
  long: number | string;
  lat: number | string;
  height: number;
  elevation: number;
}

export interface IAppViewerState {
  imageryProviders: WebMapTileServiceImageryProvider.ConstructorOptions[];
  czmlData: CesiumResource;
  geoJsonData: CesiumResource;
  destination: Destination;
  positionData: IPosition;
}

export class AppViewer implements IAppViewerState {
  public imageryProviders = [td_img_imageryProvider, td_cia_imageryProvider];
  public threeDTileset = '/3D Tiles/Test_mode/tileset.json';
  public terrain = '/terrain';

  @observable.ref public czmlData: CesiumResource;
  @observable.ref public geoJsonData: CesiumResource;
  @observable.deep public destination: Destination;
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
  setCzmlData = (czmlData: CesiumResource): void => {
    this.czmlData = czmlData;
  };

  @action
  setGeoJsonData = (geoJsonData: CesiumResource): void => {
    this.geoJsonData = geoJsonData;
  };

  @action
  setPositionData = (positionData: IPosition): void => {
    this.positionData = positionData;
  };
}

export default new AppViewer();
