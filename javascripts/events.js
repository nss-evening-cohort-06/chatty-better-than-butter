"use strict";

const messages = require("./xhr");

const messageBoard = document.getElementById("message-board");
const themeRadios = document.getElementById("radioThemes");
const body = document.getElementById("body");
const input = document.getElementById("message-input");
const clearBtn = document.getElementById("clear-messages");
const stylesheets = {
  bob: "styles/bobRoss.css",
  catty: "styles/catty.css",
  normal: "styles/main.css"
};


//deleteBtn when clicked will find the parent "messageCard" and delete it.
messageBoard.addEventListener("click", (e) => {
  if (e.target.className === "deleteBtn") {
    messages.messageDelete(e.target.parentNode.children[0].innerHTML);
  }
});

// clicking the clearBtn runs clearAll, the function to empty the dom and the 'messageData' array
clearBtn.addEventListener("click", () => {
  messages.clearAll();
});

//changes themes
themeRadios.addEventListener("change", (e) => {
  document.querySelector("link[data-active-stylesheet]").href = stylesheets[event.target.id];
});

// event listener for input field
input.focus();
input.addEventListener('keydown', (e) => {
  if (event.target.tagName != 'TEXTAREA') {
    if (e.keyCode === 13) {
      event.preventDefault();
      messages.newMessage(input.value);
      input.value = "";
      return false;
    }
  }
});

