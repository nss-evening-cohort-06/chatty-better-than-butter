"use strict";

let messages = require("./xhr");

let messageBoard = document.getElementById("message-board");
let input = document.getElementById("message-input");
let clearBtn = document.getElementById("clear-messages");

//deleteBtn when clicked will find the parent "messageCard" and delete it.
messageBoard.addEventListener("click", (event) => {
  messages.messageDelete(event.target.parentNode.children[0].innerHTML);
  // console.log(event.target.parentNode.children[0].innerHTML);
});








// clicking the clearBtn runs clearAll, the function to empty the dom and the 'messageData' array
clearBtn.addEventListener("click", () => {
	messages.clearAll();
});

// event listener for input field
input.focus();
input.addEventListener('keydown', (e) => {
	if(event.target.tagName != 'TEXTAREA') {
		if (e.keyCode === 13) {
			event.preventDefault();
      messages.newMessage(input.value);
			input.value = "";
			return false;
    }
	}
});
