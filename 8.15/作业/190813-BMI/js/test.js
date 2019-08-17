let list =["alpha" , "beta"];
  

for (let iterator in list){
  console.log(iterator, list[iterator])
}

let object1 = {
 name1: 'alpha',
 name2: 'beta',
}

for (let iterator2 in object1){
  console.log(iterator2)
}

let list2 = [
  {property1: "alpha",
   property2: "beta"
  }, 
  {
  property3: "alpha",
   property4: "beta"
  }
]

for (let i = 0; i < list2.length; i++){
  console.log(list2[i], list2[i].property1);
}
