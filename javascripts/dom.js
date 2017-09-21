"use strict";

const messages = require("./xhr");

const domString = (messages) => {
  var messageString = "";
  for (let i = 0; i < messages.length; i++) {
    messageString += `<div class="messageCard" id="messageCard">
                        <p>${messages[i].message}</p>
                        <button class="deleteBtn">Delete</button>
									    </div > `;
    writeToDom(messageString);
  }
};

const writeToDom = (strang) => {
  let messageContainer = document.getElementById("message-board");
  messageContainer.innerHTML = strang;
};

module.exports = { domString, writeToDom };