"use strict";

let domString = require("./dom");

//loads messages and writes it to the dom
const messageLoad = function () {
  let messageData = JSON.parse(this.responseText).messages;
  domString.domString(messageData);
};

const messageError = function () {
  console.log("Dis shit broke.");
};

//message json request
var messageRequest = new XMLHttpRequest();
messageRequest.addEventListener("load", messageLoad);
messageRequest.addEventListener("error", messageError);
messageRequest.open("GET", "../data/preloaded.json");
messageRequest.send();

//Loads cat.json and writes it to the dom
// const catLoad = function () {
//   var catData = JSON.parse(this.responseText).cats; //responseText gives you a string .parse turns it into JSON array
//   domString(catData);
// };

// const catError = function () {
//   console.log("Dis shit broke.");
// };

// //cat json request
// var catRequest = new XMLHttpRequest();
// catRequest.addEventListener("load", catLoad);
// catRequest.addEventListener("error", catError);
// catRequest.open("GET", "cats.json");
// catRequest.send();

module.exports = { messageLoad, messageError };