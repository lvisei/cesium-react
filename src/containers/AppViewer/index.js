import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Ion, Cartesian3, CesiumTerrainProvider, IonResource, Color } from 'cesium';
import { Viewer, CameraFlyTo, Cesium3DTileset } from 'resium';
import appViewerStore from '@/stores/modules/appViewer';
import ImageryLayers from './ImageryLayers';
import GeoJson from './GeoJson';
import Czml from './Czml';
import EventHandler from './EventHandler';
import Entitys from './Entitys';

Ion.defaultAccessToken = appViewerStore.cesiumAccessToken;

@inject('appViewer')
@observer
class AppViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewer: null
    };
  }

  componentDidMount() {
    if (this.viewer) {
      this.viewer.scene.debugShowFramesPerSecond = true;
      // this.viewer.cesiumWidget.creditContainer.style.display = 'none';
    }
  }

  _handleReady(tileset) {
    console.log(tileset);

    if (this.viewer) {
      this.viewer.zoomTo(tileset);
    }
  }

  _handleEvent(e) {
    console.log(e);
  }

  render() {
    const { geoJsonData, czmlData, destination, imageryProviders } = this.props.appViewer;
    const terrainProvider = new CesiumTerrainProvider({
      url: IonResource.fromAssetId(3956)
    });

    console.log('AppViewer render');

    return (
      <Viewer
        full
        animation={true}
        shouldAnimate={true}
        baseLayerPicker={false}
        timeline={false}
        geocoder={false}
        // terrainProvider={terrainProvider}
        ref={e => {
          this.viewer = e && e.cesiumElement;
        }}
      >
        <ImageryLayers imageryProviders={imageryProviders} />
        <EventHandler />
        <Entitys />
        {destination ? <CameraFlyTo destination={destination} /> : null}
        <GeoJson geoJsonData={geoJsonData} />
        <Czml czmlData={czmlData} />
        {/* <Cesium3DTileset url={IonResource.fromAssetId(5714)} onReady={this._handleReady.bind(this)} /> */}
      </Viewer>
    );
  }
}

export default AppViewer;
