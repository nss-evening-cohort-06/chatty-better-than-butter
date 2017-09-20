"use strict";

let deleteMessages = require("./deleteMessages");
let domString = require("./dom");
let messages = require("./xhr");

let messageBoard = document.getElementById("message-board");

//deleteBtn when clicked will find the parent "messageCard" and delete it.
messageBoard.addEventListener("click", (event) => {
  messages.messageDelete(event.target.parentNode.children[0].innerHTML);
  // console.log(event.target.parentNode.children[0].innerHTML);
});















let clearBtn = document.getElementById("clear-messages");
clearBtn.addEventListener("click", (event) => {
	deleteMessages.clearAll();
});