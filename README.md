## cesium Map

### cesuim Api

#### Entity 实体

#### ImageLayer 图层加载

#### Terrain 地形加载

#### Camera 相机

```
new Cesium.Camera(scene)
```
Members
- positionCartographic 相机的位置

Methods
- pickEllipsoid(windowPosition, ellipsoid, result) 将二维坐标转换为对应椭球体三维坐标


#### Cartographic 经纬度和高度

```
new Cesium.Cartographic(longitude, latitude, height)
```

#### Ellipsoid

```
new Cesium.Ellipsoid(x, y, z)
```

- cartesianToCartographic(cartesian, result)  将笛卡尔坐标转换为地理坐标

#### Globe

```
new Cesium.Globe(ellipsoid)
```

- getHeight(cartographic) 获取海拔高度

#### Math
- toDegrees(radians) 弧度转为度的十进制

### 插件
  - cesium-drawhelper


### Webpack 打包

### Resium 库

#### React 生态
- React
- Redux
- Dva
- Umi
- Mobx
- immutable-js 与 immer
- memoize-one
