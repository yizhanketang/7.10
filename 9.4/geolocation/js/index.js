
// var map = new AMap.Map('container');

var center = [108.947472,34.24004]

var map = new AMap.Map('container', {
  resizeEnable: true,
  center: center,//中心点坐标
  viewMode:'3D',//使用3D视图
  layers: [//使用多个图层
    // new AMap.TileLayer.Satellite(),
    // new AMap.TileLayer.RoadNet()
  ],
  zoom: 15,//级别
  // zooms: [4,18],//设置地图级别范围
});

//实时路况图层
var trafficLayer = new AMap.TileLayer.Traffic({
  zIndex: 10
});
map.add(trafficLayer);//添加图层到地图

var marker = new AMap.Marker({
  position: center//位置
})
map.add(marker);//添加到地图

// map.remove(marker)

var lineArr = [
  [116.368904, 39.913423],
  [116.382122, 39.901176],
  [116.387271, 39.912501],
  [116.398258, 39.904600]
];

// 也提供了绘制
// 圆Circle、
// 折线 Polyline、
// 多边形 Polygon、
// 椭圆 Ellipse、
// 矩形 Rectangle、
// 贝瑟尔曲线 BesizerCurve等矢量图形的能力，比如添加折线：

var polyline = new AMap.Polyline({
  path: lineArr,          //设置线覆盖物路径
  strokeColor: "#3366FF", //线颜色
  strokeWeight: 5,        //线宽
  strokeStyle: "solid",   //线样式
});
map.add(polyline);


var infoWindow = new AMap.InfoWindow({ //创建信息窗体
  isCustom: true,  //使用自定义窗体
  content:'<div class="info"><h1>一盏课堂</h1><div>详细地址：大话南门壹中心1409</div><div>联系电话：110</div></div>', //信息窗体的内容可以是任意html片段
  offset: new AMap.Pixel(16, -45)
});
var onMarkerClick = function(e) {
  infoWindow.open(map, e.target.getPosition());//打开信息窗体
  //e.target就是被点击的Marker
}
/*var marker = new AMap.Marker({
  position: [116.481181, 39.989792]
})
map.add(marker);*/
marker.on('click', onMarkerClick);//绑定click事件



// console.log(navigator.geolocation)

/*console.log(navigator.geolocation.getCurrentPosition(showPosition))
function showPosition(position) {
  console.log(position)
}*/

