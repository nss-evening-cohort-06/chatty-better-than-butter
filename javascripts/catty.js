"use strict";
const catDom = require("./dom");
const deleteCat = require("./xhr");
const catBtn = document.getElementById("catBtn");
const messageContainer = document.getElementById("message-board");

let catData = [];


const writeToDom = function (strang) {
  messageContainer.innerHTML += strang;
};

catBtn.addEventListener("click", (event) => {
  catXHR();
});

// Loads cat.json and writes it to the dom
const catLoad = function () {
  catData = JSON.parse(this.responseText).cats;
  deleteCat.addCatsToMessage(catData);
};

const catError = function () {
  console.log("Dis shit broke.");
};

//cat json request
const catXHR = () => {
  const catRequest = new XMLHttpRequest();
  catRequest.addEventListener("load", catLoad);
  catRequest.addEventListener("error", catError);
  catRequest.open("GET", "../data/cats.json");
  catRequest.send();
};

module.exports = { catLoad, catError };

