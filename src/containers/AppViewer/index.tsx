import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Cesium, { Ion, IonResource, CesiumTerrainProvider } from 'cesium';
import { Viewer, CameraFlyTo } from 'resium';
import appViewerStore from '@/stores/modules/appViewer';
import ImageryLayers from './ImageryLayers';
import GeoJson from './GeoJson';
import Czml from './Czml';
import EventHandler from './EventHandler';
import Entitys from './Entitys';
import { IStores } from '@/stores';

Ion.defaultAccessToken = appViewerStore.cesiumAccessToken;
// (Cesium as any).Ion.defaultAccessToken = appViewerStore.cesiumAccessToken;

interface IProps {
  appViewer?: IStores['appViewer'];
}

@inject('appViewer')
@observer
class AppViewer extends Component<IProps, {}> {
  ref: { current: any | HTMLDivElement };
  viewer: Cesium.Viewer | undefined | any;
  terrainProvider: CesiumTerrainProvider;

  constructor(props: IProps) {
    super(props);
    this.ref = React.createRef();
    this.terrainProvider = new CesiumTerrainProvider({
      url: IonResource.fromAssetId(3956)
      // url: (Cesium as any).IonResource.fromAssetId(3956)
    });
    this.state = {};
  }

  componentDidMount() {
    if (this.ref.current) {
      this.viewer = this.ref.current.cesiumElement;
      this.viewer.scene.debugShowFramesPerSecond = true;
      this.viewer.cesiumWidget.creditContainer.style.display = 'none';
    }
  }

  _handleReady = (tileset: any) => {
    console.log(tileset);

    if (this.viewer) {
      this.viewer.zoomTo(tileset);
    }
  };

  _handleEvent(e: Event) {
    console.log(e);
  }

  render() {
    const { geoJsonData, czmlData, destination, imageryProviders } = this.props.appViewer!;

    console.log('AppViewer render');

    return (
      <Viewer
        full
        animation={false}
        shouldAnimate={true}
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
        {/* <Cesium3DTileset url={IonResource.fromAssetId(5714)} onReady={this._handleReady} /> */}
      </Viewer>
    );
  }
}

export default AppViewer;
