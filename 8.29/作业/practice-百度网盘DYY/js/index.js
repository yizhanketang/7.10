var rightPart = document.getElementById('right');
var blockPart = document.getElementById('block');

rightPart.oncontextmenu = function(e) {
    var left = e.clientX;
    var top = e.clientY;
    console.log(left,top);
    blockPart.style.left = left + 'px';
    blockPart.style.top = top + 'px';
    blockPart.style.display = 'block';
    e.preventDefault();
};
document.documentElement.onclick = function () {
    blockPart.style.display = 'none';
};

var displayOne = document.getElementById('display_none')
var displayTwo = document.getElementById('display_block')
var moreOne = document.getElementById('more')
var moreTwo = document.getElementById('mores')

moreOne.onclick = function(){
	// console.log('hello')
	moreOne.style.display ='none'
	moreTwo.style.display = 'block'
	displayOne.style.display ='none'
	displayTwo.style.display ='block'
	}
	moreTwo.onclick = function(){
	// console.log('hello')
	moreOne.style.display ='block'
	moreTwo.style.display = 'none'
	displayOne.style.display ='block'
	displayTwo.style.display ='none'
	}





