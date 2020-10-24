# Cesium Map

[![Build Status](https://www.travis-ci.org/liuvigongzuoshi/cesium-react.svg?branch=master)](https://www.travis-ci.org/liuvigongzuoshi/cesium-react)

## Resium 库

- [resium](https://github.com/darwin-education/resium#readme) - React components for 🌏 Cesium.

## React 生态

- React
- React Hooks
- ~~Redux~~
- ~~Dva~~
- ~~Umi~~
- Mobx
- immutable-js、immer
- memoize-one

## Webpack Cesium

- [CesiumJS and Webpack](https://cesium.com/docs/tutorials/cesium-and-webpack/)
- [Set up webpack configuration](https://resium.darwineducation.com/installation#2-set-up-webpack-configuration)
- [craco-cesium](https://github.com/darwin-education/craco-cesium#readme) - Cesium with create-react-app

## Cesium 常用坐标系

- 屏幕坐标

  - 像素值

- 笛卡尔平面坐标

  - `new Cesium.Cartesian2(x, y)`

- 笛卡尔空间直角坐标

  - `new Cesium.Cartesian3(x, y, z)`

- 地理坐标
  - 默认为弧度值
  - `new Cesium.Cartographic(longitude, latitude, height)`

## Cesium 坐标变换

1. 屏幕坐标与笛卡尔空间直角坐标

获取鼠标单击后在屏幕中的坐标

```js
const hander = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
//绑定鼠标左点击事件
hander.setInputAction(function (event){
//获取鼠标点的 windowPosition
  const windowPosition = event.position;
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);
```

屏幕坐标转换为笛卡尔空间直角坐标
三维模式下

```js
const ray = viewer.camera.getPickRay(windowPosition);
const cartesian = viewerscene.globe.pick(ray, viewer.scene);
```
二维模式下
```
const cartesian = scene.camera.pickEllipsoid(position, scene.globe.ellipsoid);
```

笛卡尔空间直角坐标转换为屏幕坐标
```js
const pick = Cesium.SceneTransforms.wgs84ToWindowCoordinates(viewer.scene, cartesian);
```
2. 地理坐标与笛卡尔空间直角坐标

 笛卡尔空间直角坐标 转换为 地理坐标(弧度制)

```js
const cartographic = Cesium.Cartographic.fromCartesian(cartesian)
```

地理坐标(弧度制) 转换为 笛卡尔空间直角坐标

``` js
const position = Cesium.Cartesian3.fromRadians(lng, lat, height)
```

笛卡尔空间直角坐标 转换为 地理坐标(经纬度)

```js
const cartographic = Cesium.Cartographic.fromCartesian(cartesian) 
const lat = Cesium.Math.toDegrees(cartographic.latitude);
const lng = Cesium.Math.toDegrees(cartographic.longitude);
const height = cartographic.height;
```

度数与弧度互转 

```js
Cesium.Math.toDegrees(radians)
Cesium.Math.toRadians(degrees)
```

地理坐标(经纬度) 转换为 笛卡尔空间直角坐标

```js
const position = Cesium.Cartesian3.fromDegrees(longitude, latitude, height)
```

## Cesuim Api

### ImageLayer 图层加载

### Terrain 地形加载

### Camera 相机

```js
new Cesium.Camera(scene);
```

Members

- positionCartographic 相机的位置

Methods

- pickEllipsoid(windowPosition, ellipsoid, result) 将二维坐标转换为对应椭球体三维坐标

### Cartographic 地理坐标

```js
new Cesium.Cartographic(longitude, latitude, height);
```

### Ellipsoid

```js
new Cesium.Ellipsoid(x, y, z);
```

### Globe

```js
new Cesium.Globe(ellipsoid);
```

Methods

- getHeight(cartographic) 获取海拔高度

### Math

- toDegrees(radians) 弧度转为度的十进制
- Cesium.Math..toRadians(degrees) 度的十进制转为弧度

### Entity 矢量数据

### Primitive 矢量数据

[Primitive](https://cesium.com/docs/cesiumjs-ref-doc/Primitive.html?classFilter=Primitive) 由两个部分组成

- Geometry 几何形状：定义了 Primitive 的结构，例如三角形、线条、点等
- Appearance 外观：定义 Primitive 的着色(Sharding)，包括 GLSL(OpenGL着色语言) 顶点着色器和片段着色器(vertex and fragment shaders)，以及渲染状态(render state）

## Cesuim 插件

- [cesium-tdt](https://github.com/ngcc-tdt/plugin/tree/master/cesiumTdt)
