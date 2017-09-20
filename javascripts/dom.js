"use strict";

const loadedFiles = require("./xhr");
const deleteMessages = require("./deleteMessages");

const domString = function (messages) {

  deleteMessages.checkClearBtn(messages);
  
  var messageString = "";
  for (var i = 0; i < messages.length; i++) {
    messageString += `<div class="messageCard">
                        ${messages[i].message}
                        <button class="deleteBtn">Delete</button>
									    </div > `;
    writeToDom(messageString);
  }
};

const writeToDom = function (strang) {
  var messageContainer = document.getElementById("message-board");
  messageContainer.innerHTML = strang;
};

module.exports = { domString, writeToDom };