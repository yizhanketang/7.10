var inPut = document.getElementsByClassName('choice');
var checkAll = document.getElementById('check_all');
var invertSelection = document.getElementById('invert_selection');


checkAll.onclick = function () {
    // console.log(checkAll);
    for (var i=0 ;i<inPut.length; i++) {
        inPut[i].checked = checkAll.checked
    }
};
invertSelection.onclick = function () {
    for (var i=0 ;i<inPut.length; i++) {
        inPut[i].checked = !inPut[i].checked
    }
};

for (var j=0 ;j<inPut.length; j++){
    inPut[j].onclick = function () {
        var numBer = 0;
        for (var i=0 ;i<inPut.length; i++) {
            console.log(inPut[i]);
            if(inPut[i].checked){
                numBer+=1
            }
        }
        if (numBer===inPut.length){
            checkAll.checked = true
        }
        else {
            checkAll.checked = false
        }
    }
}