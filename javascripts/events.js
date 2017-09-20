"use strict";
let domString = require("./dom");
let messages = require("./xhr");

let messageBoard = document.getElementById("message-board");

//deleteBtn when clicked will find the parent "messageCard" and delete it.
messageBoard.addEventListener("click", (event) => {
  messages.messageDelete(event.target.parentNode.children[0].innerHTML);
  // console.log(event.target.parentNode.children[0].innerHTML);
});
const pressEnter = require("./addMessages");
// function entPress() {
let input = document.getElementById("message-input");
input.focus();
input.addEventListener('keydown', function(e){
		if (e.keyCode === 13) {
      console.log(input.value);
      //pressEnter.newMessage(input.value);
    }
	});
// }
