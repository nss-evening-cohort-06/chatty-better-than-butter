"use strict";

const domString = require("./dom");
const messages = require("./xhr");
const themes = require("./themes");
const pressEnter = require("./addMessages");
const catty = require("./catty");

const messageBoard = document.getElementById("message-board");
const themeRadios = document.getElementById("radioThemes");
const body = document.getElementById("body");
const input = document.getElementById("message-input");

//deleteBtn when clicked will find the parent "messageCard" and delete it.
messageBoard.addEventListener("click", (event) => {
  if (event.target.className === "deleteBtn") {
    messages.messageDelete(event.target.parentNode.children[0].innerHTML);
  }
});

//loops through radio buttons and removes css class to add different css class
themeRadios.addEventListener("change", (event) => {
  for (let i = 0; i < themeRadios.children.length; i++) {
    if (event.target.id === "bob") {
      document.querySelector("link[href='styles/main.css']").href = "styles/bobRoss.css";
    }
  }
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

