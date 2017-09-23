"use strict";

const catBtn = document.getElementById("catBtn");

let catData = [];

const catString = function (cats) {
  let catString = "";
  console.log(catData);
  for (var i = 0; i < catData.length; i++) {
    catString += `<div class="messageCard">
                        <p id="message">${catData[i].cat}</p>
                        <button class="deleteBtn">Delete</button>
									    </div > `;
    writeToDom(catString);
  }
};

const writeToDom = function (strang) {
  var messageContainer = document.getElementById("message-board");
  messageContainer.innerHTML = strang;
};

catBtn.addEventListener("click", (event) => {
  console.log(catData);
});

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
