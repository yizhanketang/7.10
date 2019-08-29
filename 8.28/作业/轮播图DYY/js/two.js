var headerOne = document.getElementsByTagName('header');

// plugIn(headerOne[0], 5000);
// plugIn(headerOne[1]);

plugIn({
  el: document.getElementById('banner1'),
  config:{
    delay:3000
  }
});

plugIn({
  el:document.getElementById('banner2'),
  config:{
    delay:5000
  }
});