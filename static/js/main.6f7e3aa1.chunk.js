(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,a){},174:function(e,t,a){"use strict";a.r(t);var n,i,r,o,l,c,s,u,m,p,b,d=a(1),h=a.n(d),f=a(5),v=a.n(f),y=a(20),g=a(24),O=a(11),j=a(25),w=(a(104),a(9)),E={url:"http://t0.tianditu.gov.cn/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=e60679f6e9718d3426f745fd8cd94cbd",layer:"tdtBasicLayer",style:"default",format:"image/jpeg",tileMatrixSetID:"GoogleMapsCompatible",maximumLevel:18},D={url:"http://t0.tianditu.gov.cn/cia_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg&tk=e60679f6e9718d3426f745fd8cd94cbd",layer:"tdtAnnoLayer",style:"default",format:"image/jpeg",tileMatrixSetID:"GoogleMapsCompatible",maximumLevel:18},k=new(n=function e(){Object(O.a)(this,e),this.cesiumAccessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiOGQ2NzAwYS05MDY4LTRmYzMtYTcxZi0wNjNiYmE3MGM5OWYiLCJpZCI6NTc3Nywic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTU0NDE1MzY1NH0.wVfPywSemmFgFwPErzK5ovEqAcrXFNsfr59leudVLsI",this.td_img_imageryProvider=E,this.td_cia_imageryProvider=D,this.imageryProviders=[E,D],Object(g.a)(this,"czmlData",i,this),Object(g.a)(this,"geoJsonData",r,this),Object(g.a)(this,"destination",o,this),Object(g.a)(this,"positionData",l,this),Object(g.a)(this,"setDestination",c,this),Object(g.a)(this,"setCzmlData",s,this),Object(g.a)(this,"setGeoJsonData",u,this),Object(g.a)(this,"setPositionData",m,this)},i=Object(j.a)(n.prototype,"czmlData",[w.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),r=Object(j.a)(n.prototype,"geoJsonData",[w.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),o=Object(j.a)(n.prototype,"destination",[w.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),l=Object(j.a)(n.prototype,"positionData",[w.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),c=Object(j.a)(n.prototype,"setDestination",[w.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){return e.destination=t}}}),s=Object(j.a)(n.prototype,"setCzmlData",[w.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){return e.czmlData=t}}}),u=Object(j.a)(n.prototype,"setGeoJsonData",[w.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){return e.geoJsonData=t}}}),m=Object(j.a)(n.prototype,"setPositionData",[w.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){return e.positionData=t}}}),n),C={appViewer:k},I=(a(105),a(13)),P=a(17),_=a(14),z=a(18),M=a(2),T=a(10),N=function(e){function t(){return Object(O.a)(this,t),Object(P.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(z.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){return console.log("ImageryLayers render"),h.a.createElement(T.g,null,this.props.imageryProviders.map(function(e,t){return h.a.createElement(T.f,{key:t,imageryProvider:(a=e,new M.WebMapTileServiceImageryProvider(a))});var a}))}}]),t}(d.PureComponent),S=Object(T.l)(function(e){var t=e.cesium,a=e.geoJsonData;return a?h.a.createElement(T.e,{data:a,onLoad:function(e){return t.viewer.flyTo(e)}}):null}),x=Object(T.l)(function(e){var t=e.cesium,a=e.czmlData;return a?h.a.createElement(T.b,{data:a,onLoad:function(e){return t.viewer.flyTo(e)}}):null}),J=Object(y.b)("appViewer")(p=function(e){function t(){return Object(O.a)(this,t),Object(P.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(z.a)(t,e),Object(I.a)(t,[{key:"_handleEvent",value:function(e){console.log(e)}},{key:"_handleMouseMoveEvent",value:function(e){var t=e.endPosition,a=this.props,n=a.cesium,i=n.camera,r=n.globe,o=a.appViewer.setPositionData,l=function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:M.Ellipsoid.WGS84,i=e.pickEllipsoid(a);if(!Object(M.defined)(i))return null;var r=n.cartesianToCartographic(i),o=M.Math.toDegrees(r.longitude).toFixed(6),l=M.Math.toDegrees(r.latitude).toFixed(6),c=Math.ceil(t.getHeight(r));return{long:o,lat:l,height:Math.ceil(e.positionCartographic.height)-c,elevation:c}}(i,r,t);if(!l)return!1;o(l)}},{key:"render",value:function(){return h.a.createElement(T.j,null,h.a.createElement(T.i,{action:this._handleMouseMoveEvent.bind(this),type:M.ScreenSpaceEventType.MOUSE_MOVE}))}}]),t}(d.PureComponent))||p,G=Object(T.l)(J),L=function(e){function t(){return Object(O.a)(this,t),Object(P.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(z.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){var e=M.Cartesian3.fromDegrees(105.0707383,30.7117244,100);return h.a.createElement(T.c,{name:"Sokyo",position:e},h.a.createElement(T.h,{pixelSize:25,color:M.Color.CRIMSON,outlineWidth:5,outlineColor:M.Color.LIGHTCORAL}),h.a.createElement(T.d,null,h.a.createElement("h1",null,"Hello, world."),h.a.createElement("p",null,"JSX is available here!")))}}]),t}(d.PureComponent);M.Ion.defaultAccessToken=k.cesiumAccessToken;var R,A,V=Object(y.b)("appViewer")(b=Object(y.c)(b=function(e){function t(e){var a;return Object(O.a)(this,t),(a=Object(P.a)(this,Object(_.a)(t).call(this,e))).state={viewer:null},a}return Object(z.a)(t,e),Object(I.a)(t,[{key:"componentDidMount",value:function(){this.viewer&&(this.viewer.scene.debugShowFramesPerSecond=!0,this.viewer.cesiumWidget.creditContainer.style.display="none")}},{key:"_handleReady",value:function(e){console.log(e),this.viewer&&this.viewer.zoomTo(e)}},{key:"_handleEvent",value:function(e){console.log(e)}},{key:"render",value:function(){var e=this,t=this.props.appViewer,a=t.geoJsonData,n=t.czmlData,i=t.destination,r=t.imageryProviders;new M.CesiumTerrainProvider({url:M.IonResource.fromAssetId(3956)});return console.log("AppViewer render"),h.a.createElement(T.k,{full:!0,animation:!1,shouldAnimate:!0,baseLayerPicker:!1,timeline:!1,geocoder:!1,ref:function(t){e.viewer=t&&t.cesiumElement}},h.a.createElement(N,{imageryProviders:r}),h.a.createElement(G,null),h.a.createElement(L,null),i?h.a.createElement(T.a,{destination:i}):null,h.a.createElement(S,{geoJsonData:a}),h.a.createElement(x,{czmlData:n}))}}]),t}(d.Component))||b)||b,B=(a(108),a(74)),F=(a(75),a(37)),Y=(a(111),a(35)),W=(a(175),a(22)),U=a(90),X=a.n(U),q=h.a.createElement(W.a,{onClick:function(e){var t=e.key;"Box"===t?a.e(3).then(a.t.bind(null,178,3)).then(function(e){var t=e.default;k.setCzmlData(t)}):"Satellite"===t?a.e(6).then(a.t.bind(null,179,3)).then(function(e){var t=e.default;k.setCzmlData(t)}):"DynamicPoint"===t?a.e(4).then(a.t.bind(null,180,3)).then(function(e){var t=e.default;k.setCzmlData(t)}):"Path"===t&&a.e(5).then(a.t.bind(null,181,3)).then(function(e){var t=e.default;k.setCzmlData(t)})}},h.a.createElement(W.a.Item,{key:"Box"},"Box"),h.a.createElement(W.a.Item,{key:"Satellite"},"Satellite"),h.a.createElement(W.a.Item,{key:"DynamicPoint"},"DynamicPoint"),h.a.createElement(W.a.Item,{key:"Path"},"Path")),H=h.a.createElement(W.a,{onClick:function(e){var t=e.key;"Point"===t?a.e(7).then(a.t.bind(null,182,3)).then(function(e){var t=e.default;k.setGeoJsonData(t)}):"Simple Styles"===t?a.e(8).then(a.t.bind(null,183,3)).then(function(e){var t=e.default;k.setGeoJsonData(t)}):"Population"===t&&a.e(9).then(a.t.bind(null,184,3)).then(function(e){var t=e.default;k.setGeoJsonData(t)})}},h.a.createElement(W.a.Item,{key:"Point"},"Point"),h.a.createElement(W.a.Item,{key:"Simple Styles"},"Simple Styles"),h.a.createElement(W.a.Item,{key:"Population"},"Population")),Z=Object(y.b)("appViewer")(R=function(e){function t(){var e;return Object(O.a)(this,t),(e=Object(P.a)(this,Object(_.a)(t).call(this))).state={},e}return Object(z.a)(t,e),Object(I.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.appViewer,t=(e.setCzmlData,e.setGeoJsonData,"".concat(X.a.toolbar," ").concat(this.props.className?this.props.className:""," "));return h.a.createElement("div",{className:t},h.a.createElement(B.a,{overlay:q},h.a.createElement(F.a,{type:"primary",style:{marginRight:10,marginBottom:10}},"Render czml and fly to ",h.a.createElement(Y.a,{type:"down"}))),h.a.createElement(B.a,{overlay:H},h.a.createElement(F.a,{type:"primary"},"Render geojson and fly to ",h.a.createElement(Y.a,{type:"down"}))))}}]),t}(d.PureComponent))||R,K=a(38),Q=a.n(K),$=Object(y.b)("appViewer")(A=Object(y.c)(A=function(e){function t(){var e,a;Object(O.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(P.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(i))))._className="".concat(Q.a.locationbar," ").concat(a.props.className?a.props.className:""," "),a}return Object(z.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){var e=this.props.appViewer.positionData,t=e||{long:null,lat:null,height:null,elevation:null},a=t.long,n=t.lat,i=t.height,r=t.elevation;return h.a.createElement("div",{className:this._className},h.a.createElement("div",null,i?h.a.createElement("span",{className:Q.a.locationcamera},"\u89c6\u70b9\u9ad8\uff1a",i,"\u7c73"):null,r?h.a.createElement("span",{className:Q.a.locationcamera},"\u6d77\u62d4\uff1a",r,"\u7c73"):null,a?h.a.createElement("span",{className:Q.a.locationcamera},"\u7ecf\u5ea6\uff1a",a):null,n?h.a.createElement("span",{className:Q.a.locationcamera},"\u7eac\u5ea6\uff1a",n):null),h.a.createElement("div",{className:Q.a.distancelegend},"\u6bd4\u4f8b\u5c3a"))}}]),t}(d.Component))||A)||A,ee=a(73),te=a.n(ee),ae=function(e){function t(){var e;return Object(O.a)(this,t),(e=Object(P.a)(this,Object(_.a)(t).call(this))).state={},e}return Object(z.a)(t,e),Object(I.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return h.a.createElement(h.a.Fragment,null,h.a.createElement(Z,{className:te.a.toolbar}),h.a.createElement($,{className:te.a.locationbar}),h.a.createElement(V,null))}}]),t}(d.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));v.a.render(h.a.createElement(y.a,C,h.a.createElement(ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},2:function(e,t){e.exports=Cesium},38:function(e,t,a){e.exports={locationbar:"LocationBar_locationbar__OXNRU",locationcamera:"LocationBar_locationcamera__amrUl",distancelegend:"LocationBar_distancelegend__2GvWI"}},73:function(e,t,a){e.exports={toolbar:"App_toolbar__1X7h7",locationbar:"App_locationbar__Z6v-r"}},90:function(e,t,a){e.exports={toolbar:"ToolBar_toolbar__1rNFa"}},99:function(e,t,a){e.exports=a(174)}},[[99,1,2]]]);
//# sourceMappingURL=main.6f7e3aa1.chunk.js.map