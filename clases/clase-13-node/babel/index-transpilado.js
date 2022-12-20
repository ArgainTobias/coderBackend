"use strict";

var array = [1, 2, 3, 4, 5];
array.map(function (n) {
  return n * 2;
}).forEach(function (n) {
  return console.log(n);
});
