import React, { PureComponent } from 'react';
import { inject } from 'mobx-react';
import { KeyboardEventModifier, ScreenSpaceEventType, Ellipsoid, defined, Math as CesiumMath, Globe } from 'cesium';
import { ScreenSpaceEventHandler, ScreenSpaceEvent, withCesium } from 'resium';

/**
 *获取实例的二维笛卡尔点的经度、纬度、相机高度、海拔高度
 *
 * @param {*} camera
 * @param {*} globe
 * @param {*} Cartesian2
 * @param {*} [ellipsoid=Ellipsoid.WGS84]
 * @returns
 */
const getMousePointPosition = (camera, globe, Cartesian2, ellipsoid = Ellipsoid.WGS84) => {
  // 通过指定的椭球或者地图对应的坐标系，将鼠标的二维坐标转换为对应椭球体三维坐标
  const cartesian = camera.pickEllipsoid(Cartesian2);
  if (!defined(cartesian)) return null;

  // 将笛卡尔坐标转换为地理坐标
  const cartographic = ellipsoid.cartesianToCartographic(cartesian);
  // 将弧度转为度的十进制度表示
  const longitude = CesiumMath.toDegrees(cartographic.longitude).toFixed(6);
  const latitude = CesiumMath.toDegrees(cartographic.latitude).toFixed(6);
  // 获取海拔高度
  const elevation = Math.ceil(globe.getHeight(cartographic));
  // 获取相机高度
  const height = Math.ceil(camera.positionCartographic.height) - elevation;

  return {
    long: longitude,
    lat: latitude,
    height: height,
    elevation: elevation
  };
};

@inject('appViewer')
class EventHandler extends PureComponent {
  _handleEvent(e) {
    console.log(e);
  }

  _handleMouseMoveEvent({ endPosition }) {
    const {
      cesium: { camera, globe },
      appViewer: { setPositionData }
    } = this.props;
    const positionData = getMousePointPosition(camera, globe, endPosition);
    if (!positionData) return false;
    setPositionData(positionData);
  }

  render() {
    return (
      <ScreenSpaceEventHandler>
        <ScreenSpaceEvent action={this._handleMouseMoveEvent.bind(this)} type={ScreenSpaceEventType.MOUSE_MOVE} />
      </ScreenSpaceEventHandler>
    );
  }
}

export default withCesium(EventHandler);
