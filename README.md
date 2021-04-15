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

### 1. 屏幕坐标

- 像素值

### 2. 笛卡尔平面坐标

- `new Cesium.Cartesian2(x, y)`

### 3. 笛卡尔空间直角坐标

> 椭球中心为原点的空间直角坐标系中的一个点的坐标

- `new Cesium.Cartesian3(x, y, z)`

### 4. 经纬度

> 地理坐标系，坐标原点在椭球的质心。

> 经度：参考椭球面上某点的大地子午面与本初子午面间的两面角。东正西负。

> 纬度 ：参考椭球面上某点的法线与赤道平面的夹角。北正南负。

Cesuim中没有具体的经纬度对象，要得到经纬度首先需要计算为弧度，再进行转换。

### 5. 弧度

> 弧度即角度对应弧长是半径的倍数

> 角度转弧度：π/180×角度

> 弧度变角度：180/π×弧度

  - longitude, latitude 弧度值
  - height 单位米
  - `new Cesium.Cartographic(longitude, latitude, height)`

## Cesium 坐标变换

### 1. 地理坐标与笛卡尔空间直角坐标

#### 1.1 地理坐标(经纬度) 转换为 笛卡尔空间直角坐标

- 方式一：直接转换

```js
const position_cartesian3 = Cesium.Cartesian3.fromDegrees(longitude, latitude, height, ellipsoid)
```

- 方式二：先转换成弧度再转换

> 借助 ellipsoid 对象的方法

```js
const ellipsoid = viewer.scene.globe.ellipsoid;
const cartographic = Cesium.Cartographic.fromDegrees(longitude, latitude, height, ellipsoid);
const position_cartesian3 = ellipsoid.cartographicToCartesian(cartographic);
```

#### 1.2 地理坐标(弧度制) 转换为 笛卡尔空间直角坐标

``` js
const position_cartesian3 = Cesium.Cartesian3.fromRadians(longitude, latitude, height, ellipsoid)
```

#### 1.3 笛卡尔空间直角坐标 转换为 地理坐标(弧度制)

```js
const cartographic = Cesium.Cartographic.fromCartesian(cartesian)
```

#### 1.4 笛卡尔空间直角坐标 转换为 地理坐标(经纬度)

- 方式一

```js
const cartographic = Cesium.Cartographic.fromCartesian(cartesian) 
const lat = Cesium.Math.toDegrees(cartographic.latitude);
const lng = Cesium.Math.toDegrees(cartographic.longitude);
const alt = cartographic.height;
```

- 方式二

> 借助 ellipsoid 对象的方法

```js
const ellipsoid = viewer.scene.globe.ellipsoid;
const position_cartesian3 = new Cesium.cartesian3(x, y, z);
const cartographic = ellipsoid.cartesianToCartographic(position_cartesian3);
const lat = Cesium.Math.toDegrees(cartographic.latitude);
const lng = Cesium.Math.toDegrees(cartographic.longitude);
const alt = cartographic.height;
```

> 经纬度与弧度互转 

```js
// 将弧度转化为经纬度
Cesium.Math.toDegrees(radians)
// 将经纬度转化弧度
Cesium.Math.toRadians(degrees)
```

### 2. 屏幕坐标与笛卡尔空间直角坐标

2.1 获取鼠标单击后在屏幕中的坐标

```js
const hander = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
//绑定鼠标左点击事件
hander.setInputAction((event) => {
//获取鼠标点的 windowPosition: Cesium.Cartesian2
  const windowPosition = event.position;
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);
```

屏幕坐标转换为笛卡尔空间直角坐标

- 三维模式下

```js
const ray = viewer.camera.getPickRay(windowPosition);
const position_cartesian3 = viewer.scene.globe.pick(ray, viewer.scene);
```

- 二维模式下

```js
const position_cartesian3 = viewer.scene.camera.pickEllipsoid(windowPosition, scene.globe.ellipsoid);
```

笛卡尔空间直角坐标转换为屏幕坐标

```js
// position_cartesian2: Cartesian2
const position_cartesian2 = Cesium.SceneTransforms.wgs84ToWindowCoordinates(viewer.scene, position_cartesian3);
```

## Cesuim Api

### Ellipsoid 行星形状定义

```js
new Cesium.Ellipsoid(x, y, z);
```

### Globe

```js
new Cesium.Globe(ellipsoid);
```

Methods

- getHeight(cartographic) 获取表面的高度

### Math

- Cesium.Math.toDegrees(radians) 将弧度转化为经纬度
- Cesium.Math.toRadians(degrees) 将经纬度转化弧度

### Cartographic 地理坐标(弧度制)

```js
new Cesium.Cartographic(longitude, latitude, height);
```

### ImageLayer 图层加载

### Terrain 地形加载

### Camera 相机

```js
new Cesium.Camera(scene);
```

Members

- positionCartographic 相机的位置

Methods

- pickEllipsoid(windowPosition, ellipsoid) 将屏幕坐标转换为对应椭球体三维笛卡尔坐标

### Entity 实体

### Primitive 图元

[Primitive](https://cesium.com/docs/cesiumjs-ref-doc/Primitive.html?classFilter=Primitive) 由两个部分组成

- Geometry 几何形状：定义了 Primitive 的结构，例如三角形、线条、点等
- Appearance 外观：定义 Primitive 的着色(Sharding)，包括 GLSL(OpenGL着色语言) 顶点着色器和片段着色器(vertex and fragment shaders)，以及渲染状态(render state）

## Cesuim 插件

- [cesium-tdt](https://github.com/ngcc-tdt/plugin/tree/master/cesiumTdt)
