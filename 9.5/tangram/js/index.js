
var tutorial = document.getElementById('tutorial')

tutorial.height = 800
tutorial.width = 800
var ctx = tutorial.getContext('2d')

var tangram = [
  {p:[{x:0,y:0},{x:800,y:0},{x:400,y:400}],color:"#caff67"},
  {p:[{x:0,y:0},{x:400,y:400},{x:0,y:800}],color:"#67becf"},
  {p:[{x:800,y:0},{x:800,y:400},{x:600,y:600},{x:600,y:200}],color:"#ef3d61"},
  {p:[{x:600,y:200},{x:600,y:600},{x:400,y:400}],color:"#f9f51a"},
  {p:[{x:400,y:400},{x:600,y:600},{x:400,y:800},{x:200,y:600}],color:"#a54c09"},
  {p:[{x:200,y:600},{x:400,y:800},{x:0,y:800}],color:"#fa8ccc"},
  {p:[{x:800,y:400},{x:800,y:800},{x:400,y:800}],color:"#f6ca29"}
  ];

for (var i = 0; i < tangram.length; i++) {
  ctx.beginPath()
  // console.log(tangram[i].p[0].x, tangram[i].p[0].y)
  ctx.moveTo(tangram[i].p[0].x, tangram[i].p[0].y)
  for (var j = 0; j < tangram[i].p.length; j++) {
    // console.log(tangram[i].p[j])
    ctx.lineTo(tangram[i].p[j].x, tangram[i].p[j].y)
  }
  ctx.fillStyle = tangram[i].color
  ctx.closePath()
  ctx.fill()
  ctx.lineWidth = 10
  ctx.strokeStyle = 'red'
  ctx.stroke()
}


