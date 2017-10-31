// var array = ["rich", "joe", "lexie"];
//
// // debugger;
// // for loop
// for (var i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }
//
// var j = 0;
// // while loop
// while (j < 5) {
//   console.log("this loop has run " + j + " times");
//   j = 10;
// }
// // do while loop - will always run the code once
// do {
//   number = Math.random();
//   console.log(number);
// } while (number < 0.5);
//
// // for in loop -
//
// var myobject = new Object();
//
// myobject.a = "1";
// myobject.b = "2";
// myobject.c = "3";
//
//
//
// for( var key in myobject) {
//   console.log(key);
//   console.log(myobject[key]);
// }


for (var i = 1; i <= 100; i++) {
  if ((i) % 3 === 0 && (i) % 5 === 0) {
    console.log("FizzBuzz")
  } else if ((i) % 3 === 0) {
    console.log("Fizz")
  } else if ((i) % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
