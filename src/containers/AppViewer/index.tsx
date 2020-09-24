import React, { PureComponent } from 'react';
import { observer, inject } from 'mobx-react';
import {
  Viewer as cesiumViewer,
  Camera,
  Ion,
  IonResource,
  CesiumTerrainProvider,
  Cartographic,
  Rectangle,
  Cartesian3,
  Matrix4,
  Cesium3DTileset as cesium3DTileset,
} from 'cesium';
import { Viewer, CameraFlyTo, Cesium3DTileset } from 'resium';
import { cesiumDefalutConfig } from '@/config';
import ImageryLayers from './ImageryLayers';
import GeoJson from './GeoJson';
import Czml from './Czml';
import EventHandler from './EventHandler';
import Entitys from './Entitys';
import { IStores } from '@/stores';

Camera.DEFAULT_VIEW_RECTANGLE = Rectangle.fromDegrees(...cesiumDefalutConfig.defaultView);
Ion.defaultAccessToken = cesiumDefalutConfig.cesiumAccessToken;

interface IProps {
  appViewer?: IStores['appViewer'];
}

@inject('appViewer')
@observer
class AppViewer extends PureComponent<IProps, {}> {
  ref: { current: any | HTMLDivElement };
  viewer: cesiumViewer | undefined;
  terrainProvider: CesiumTerrainProvider;

  constructor(props: IProps) {
    super(props);
    this.ref = React.createRef();
    this.terrainProvider = new CesiumTerrainProvider({
      url: IonResource.fromAssetId(3956),
    });
    this.state = {};
  }

  componentDidMount() {
    if (this.ref.current) {
      this.viewer = this.ref.current.cesiumElement;
      this.viewer!.scene.debugShowFramesPerSecond = true;
      this.viewer!.cesiumWidget.creditContainer.setAttribute('style', 'display:none;');
    }
  }

  _handleReady3DTileset = (tileset: cesium3DTileset) => {
    // console.log('tileset: ', tileset);
    if (this.viewer) {
      const boundingSphere = tileset.boundingSphere;
      const cartographic = Cartographic.fromCartesian(boundingSphere.center);
      const surface = Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 0.0);
      const offset = Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, -100);
      const translation = Cartesian3.subtract(offset, surface, new Cartesian3());
      tileset.modelMatrix = Matrix4.fromTranslation(translation);
      const that = this.viewer;
      setTimeout(() => {
        that.flyTo(tileset);
      }, 1500);
      // this.viewer.flyTo(tileset);
    }
  };

  _handleEvent(e: Event) {
    console.log(e);
  }

  render() {
    const { geoJsonData, czmlData, destination, imageryProviders, threeDTileset } = this.props.appViewer!;

    console.log('AppViewer render');

    return (
      <Viewer
        full
        animation={false}
        shouldAnimate={true}
        selectionIndicator={true}
        baseLayerPicker={false}
        timeline={false}
        geocoder={false}
        terrainProvider={this.terrainProvider}
        ref={this.ref}
      >
        <ImageryLayers imageryProviders={imageryProviders} />
        <EventHandler />
        <Entitys />
        {destination ? <CameraFlyTo destination={destination} /> : null}
        <GeoJson geoJsonData={geoJsonData} />
        <Czml czmlData={czmlData} />
        <Cesium3DTileset url={threeDTileset} onReady={this._handleReady3DTileset} />
      </Viewer>
    );
  }
}

export default AppViewer;
