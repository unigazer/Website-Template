"use strict";

var _javascriptlibrary = require("javascriptlibrary.js");

var _javascriptlibrary2 = _interopRequireDefault(_javascriptlibrary);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// Variables
var mssg = "Hello!"; // And so it begins...


function myFunction() {
  alert(mssg);
}

document.getElementById("button").addEventListener('click', myFunction());