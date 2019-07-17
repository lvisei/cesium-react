(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{136:function(e,t,a){e.exports={toolbar:"ToolBar_toolbar__1jQkx"}},189:function(e,t,a){e.exports={locationbar:"LocationBar_locationbar__3Qpd2",locationcamera:"LocationBar_locationcamera__q8YUE",distancelegend:"LocationBar_distancelegend__2JWXa"}},190:function(e,t,a){e.exports={toolbar:"App_toolbar__11cl6",locationbar:"App_locationbar__3Vkll"}},202:function(e,t,a){"use strict";a.r(t);var n,o,r=a(15),l=a(91),i=a(96),c=a(92),s=a(97),u=a(0),m=a.n(u),p=a(191),d=a(18),h=a(87),b=a(98),f=a(22),v=a(128),y=Object(v.a)(function(e){return new h.WebMapTileServiceImageryProvider(e)}),E=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log("ImageryLayers render"),m.a.createElement(b.h,null,this.props.imageryProviders.map(function(e,t){return m.a.createElement(b.g,{key:t,imageryProvider:y(e)})}))}}]),t}(u.PureComponent),O=m.a.memo(function(e){var t=e.geoJsonData;console.log("GeoJson render");var a=m.a.useContext(b.b);return t?m.a.createElement(b.f,{data:t,onLoad:function(e){return a.viewer.flyTo(e)}}):null}),j=m.a.memo(Object(b.m)(function(e){var t=e.cesium,a=e.czmlData;return console.log("Czml render"),a?m.a.createElement(b.c,{data:a,onLoad:function(e){return t.viewer.flyTo(e)}}):null})),g=Object(d.b)("appViewer")(n=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"_handleEvent",value:function(e){console.log(e)}},{key:"_handleMouseMoveEvent",value:function(e){var t=e.endPosition,a=this.props,n=a.cesium,o=n.camera,r=n.globe,l=a.appViewer.setPositionData,i=function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:h.Ellipsoid.WGS84,o=e.pickEllipsoid(a);if(!Object(h.defined)(o))return null;var r=n.cartesianToCartographic(o),l=h.Math.toDegrees(r.longitude).toFixed(6),i=h.Math.toDegrees(r.latitude).toFixed(6),c=Math.ceil(t.getHeight(r));return{long:l,lat:i,height:Math.ceil(e.positionCartographic.height)-c,elevation:c}}(o,r,t);if(!i)return!1;l(i)}},{key:"render",value:function(){return console.log("EventHandler render"),m.a.createElement(b.k,null,m.a.createElement(b.j,{action:this._handleMouseMoveEvent.bind(this),type:h.ScreenSpaceEventType.MOUSE_MOVE}))}}]),t}(u.PureComponent))||n,k=Object(b.m)(g),P=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=h.Cartesian3.fromDegrees(105.0707383,30.7117244,100);return console.log("Entitys render"),m.a.createElement(b.d,{name:"Sokyo",position:e},m.a.createElement(b.i,{pixelSize:25,color:h.Color.CRIMSON,outlineWidth:5,outlineColor:h.Color.LIGHTCORAL}),m.a.createElement(b.e,null,m.a.createElement("h1",null,"Hello, world."),m.a.createElement("p",null,"JSX is available here!")))}}]),t}(u.PureComponent);h.Ion.defaultAccessToken=f.a.cesiumAccessToken;var w,S,_=Object(d.b)("appViewer")(o=Object(d.c)(o=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).ref=m.a.createRef(),a.state={viewer:null},a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.ref.current&&(this.viewer=this.ref.current.cesiumElement,this.viewer.scene.debugShowFramesPerSecond=!0,this.viewer.cesiumWidget.creditContainer.style.display="none")}},{key:"_handleReady",value:function(e){console.log(e),this.viewer&&this.viewer.zoomTo(e)}},{key:"_handleEvent",value:function(e){console.log(e)}},{key:"render",value:function(){var e=this.props.appViewer,t=e.geoJsonData,a=e.czmlData,n=e.destination,o=e.imageryProviders,r=new h.CesiumTerrainProvider({url:h.IonResource.fromAssetId(3956)});return console.log("AppViewer render"),m.a.createElement(b.l,{full:!0,animation:!1,shouldAnimate:!0,baseLayerPicker:!1,timeline:!1,geocoder:!1,terrainProvider:r,ref:this.ref},m.a.createElement(E,{imageryProviders:o}),m.a.createElement(k,null),m.a.createElement(P,null),n?m.a.createElement(b.a,{destination:n}):null,m.a.createElement(O,{geoJsonData:t}),m.a.createElement(j,{czmlData:a}))}}]),t}(u.Component))||o)||o,C=(a(129),a(193)),D=(a(110),a(123)),N=(a(132),a(100)),I=(a(194),a(192)),M=a(136),x=a.n(M);!function(e){e.Box="Box",e.Satellite="Satellite",e.DynamicPoint="DynamicPoint",e.Path="Path"}(S||(S={}));var z,J=m.a.createElement(I.b,{onClick:function(e){var t=e.key;t===S.Box?a.e(5).then(a.t.bind(null,195,3)).then(function(e){var t=e.default;f.a.setCzmlData(t)}):t===S.Satellite?a.e(8).then(a.t.bind(null,196,3)).then(function(e){var t=e.default;f.a.setCzmlData(t)}):t===S.DynamicPoint?a.e(6).then(a.t.bind(null,197,3)).then(function(e){var t=e.default;f.a.setCzmlData(t)}):t===S.Path&&a.e(7).then(a.t.bind(null,198,3)).then(function(e){var t=e.default;f.a.setCzmlData(t)})}},m.a.createElement(I.b.Item,{key:S.Box},"Box"),m.a.createElement(I.b.Item,{key:S.Satellite},"Satellite"),m.a.createElement(I.b.Item,{key:S.DynamicPoint},"DynamicPoint"),m.a.createElement(I.b.Item,{key:S.Path},"Path"));!function(e){e.Point="Point",e.SimpleStyles="Simple Styles",e.Population="Population"}(z||(z={}));var T,B=m.a.createElement(I.b,{onClick:function(e){var t=e.key;t===z.Point?a.e(9).then(a.t.bind(null,199,3)).then(function(e){var t=e.default;f.a.setGeoJsonData(t)}):t===z.SimpleStyles?a.e(10).then(a.t.bind(null,200,3)).then(function(e){var t=e.default;f.a.setGeoJsonData(t)}):t===z.Population&&a.e(11).then(a.t.bind(null,201,3)).then(function(e){var t=e.default;f.a.setGeoJsonData(t)})}},m.a.createElement(I.b.Item,{key:z.Point},"Point"),m.a.createElement(I.b.Item,{key:z.SimpleStyles},"Simple Styles"),m.a.createElement(I.b.Item,{key:z.Population},"Population")),V=Object(d.b)("appViewer")(w=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).state={},a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e="".concat(x.a.toolbar," ").concat(this.props.className?this.props.className:""," ");return m.a.createElement("div",{className:e},m.a.createElement(C.a,{overlay:J},m.a.createElement(D.a,{type:"primary",style:{marginRight:10,marginBottom:10}},"Render czml and fly to ",m.a.createElement(N.a,{type:"down"}))),m.a.createElement(C.a,{overlay:B},m.a.createElement(D.a,{type:"primary"},"Render geojson and fly to ",m.a.createElement(N.a,{type:"down"}))))}}]),t}(u.PureComponent))||w,A=a(189),L=a.n(A),R=Object(d.b)("appViewer")(T=Object(d.c)(T=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o))))._className="".concat(L.a.locationbar," ").concat(a.props.className?a.props.className:""," "),a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.appViewer.positionData,t=e||{long:null,lat:null,height:null,elevation:null},a=t.long,n=t.lat,o=t.height,r=t.elevation;return m.a.createElement("div",{className:this._className},m.a.createElement("div",null,o?m.a.createElement("span",{className:L.a.locationcamera},"\u89c6\u70b9\u9ad8\uff1a",o,"\u7c73"):null,r?m.a.createElement("span",{className:L.a.locationcamera},"\u6d77\u62d4\uff1a",r,"\u7c73"):null,a?m.a.createElement("span",{className:L.a.locationcamera},"\u7ecf\u5ea6\uff1a",a):null,n?m.a.createElement("span",{className:L.a.locationcamera},"\u7eac\u5ea6\uff1a",n):null),m.a.createElement("div",{className:L.a.distancelegend},"\u6bd4\u4f8b\u5c3a"))}}]),t}(u.Component))||T)||T,G=a(190),W=a.n(G),F=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).state={},a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.createElement(u.Fragment,null,u.createElement(V,{className:W.a.toolbar}),u.createElement(R,{className:W.a.locationbar}),u.createElement(_,null))}}]),t}(u.Component);t.default=Object(p.hot)(F)}}]);
//# sourceMappingURL=4.b643ec98.chunk.js.map