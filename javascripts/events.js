"use strict";

const domString = require("./dom");
const messages = require("./xhr");
const themes = require("./themes");

const messageBoard = document.getElementById("message-board");
const themeRadios = document.getElementById("radioThemes");
const body = document.getElementById("body");

//deleteBtn when clicked will find the parent "messageCard" and delete it.
messageBoard.addEventListener("click", (event) => {
  messages.messageDelete(event.target.parentNode.children[0].innerHTML);
  // console.log(event.target.parentNode.children[0].innerHTML);
});


//loops through radio buttons and removes css class to add different css class
themeRadios.addEventListener("change", (event) => {
  for (let i = 0; i < themeRadios.children.length; i++) {
    if (event.target.id === "bob") {
      body.classList.remove("red");
      body.classList.add("changeBackground");
    }
  }
});

