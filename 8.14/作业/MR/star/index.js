

var star1 = document.getElementById('star1');

// var s1 = star1.value;

// s1 = i;

function x1() {
	for (var i = 0; i < 10; i++) {
	 	document.getElementById('sanjiaoxing').innerHTML += "*";	
		for (var r = 0; r < i; r++) {
			document.getElementById('sanjiaoxing').innerHTML += "&nbsp*";	
	
		}
	    document.getElementById('sanjiaoxing').innerHTML += "<br>";	
	}
}

x3()
function x3(){
	for (var i = 10; i >= 0 ; i--) {
		// x = x +1
		// 10 9 8 7 6
		//  1 2 3 4 5

		// document.getElementById('sanjiaoxing3').innerHTML += '*';

		for (var r = 0; r < i; r++) {
			// r 0 1 2 3 4
			document.getElementById('sanjiaoxing3').innerHTML += '&nbsp;&nbsp;&nbsp;';
		}

    for (var x = 0; x < 11 - i; x++) {
      // r 0 1 2 3 4
      document.getElementById('sanjiaoxing3').innerHTML += '$ &nbsp;&nbsp;';
    }

		document.getElementById('sanjiaoxing3').innerHTML += "<br>";	
	}
}


	// for (var i = 0; i < 10; i++) {
	//  	document.write('*');
	// 	for (var r = 0; r < i; r++) {
	// 		document.write('*');
	// 		if()
	
	// 	}
	//     document.write('<br>');	
	// }

// for (var i = 0; i <= 10 ; i ++) {

// 		for (var m = 0; m <= 10 - i; m++) {
// 			document.write('&nbsp*');
// 		}
		
// 		for (var r = 0; r < 2*i-5; r++) {
// 			document.write('*');
// 		}
// 		document.write('<br>');	
// 	}





































