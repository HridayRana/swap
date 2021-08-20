

var a = prompt('Enter the first variable: ');
var b = prompt('Enter the second variable: ');


function setup(){
  var b2 = createButton("click here to Swap");

  }


function draw()
{ swap()
}
function swap() {
  [a,b]=[b,a];
  console.log("new number is "+a)
  console.log("second new number is"+b)
}
