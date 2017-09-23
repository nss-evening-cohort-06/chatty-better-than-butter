"use strict";

const deleteCat = require("./xhr");
const catBtn = document.getElementById("catBtn");
const messageBoard = document.getElementById("message-board");

let catData = [];

const catString = function (cats) {
  let catString = "";
  console.log(catData);
  for (var i = 0; i < cats.length; i++) {
    catString += `<div class="catCard">
                        <p>${cats[i].cat}</p>
                        <button class="deleteBtn">Delete</button>
									    </div > `;

  }
  writeToDom(catString);
};

const writeToDom = function (strang) {
  const messageContainer = document.getElementById("message-board");
  messageContainer.innerHTML = strang;
};

catBtn.addEventListener("click", (event) => {
  catString(catData);
});

const newMessage = (text) => {
  catData.push({ "message": text });
  catString(catData);
  deleteCat.checkClearBtn(catData);
};

messageBoard.addEventListener("click", deleteCat.messageDelete());


// Loads cat.json and writes it to the dom
const catLoad = function () {
  catData = JSON.parse(this.responseText).cats;
  return catData;
};

const catError = function () {
  console.log("Dis shit broke.");
};

//cat json request
const catRequest = new XMLHttpRequest();
catRequest.addEventListener("load", catLoad);
catRequest.addEventListener("error", catError);
catRequest.open("GET", "../data/cats.json");
catRequest.send();

module.exports = { catLoad, catError };