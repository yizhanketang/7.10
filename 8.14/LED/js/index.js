
setInterval(function () {
  var text = document.getElementById('text')
  var txt = text.innerText
  // console.log(txt.slice(1) + txt[0])
  // hello world!!!
  text.innerText = txt.slice(1) + txt[0]
  // ello world!!!h
  // llo world!!!he
  // lo world!!!hel
  // o world!!!hell
  //  world!!!hello
  // world!!!hello
  // orld!!!hello w
}, 500)



// console.log((txt.slice(1) + txt[0]).slice(1) + (txt.slice(1) + txt[0])[0])
// console.log(txt[0])


