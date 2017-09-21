"use strict";

const domString = require("./dom");
let messageData = [];

//when delete button is clicked, function loops through the messageData array
//if that clicked deleteBtn parentNode message matches a message in the array
//it deletes that message from the array
const messageDelete = (message) => {
  for (let i = 0; i < messageData.length; i++) {
    if (messageData[i].message.indexOf(message) > -1) {
      messageData.splice(i, 1);
    }
  }
  domString.domString(messageData);
};

// push newly entered text from input into message array
const newMessage = (text) => {
  messageData.push({ "message": text });
  domString.domString(messageData);
};

//loads messages and writes it to the dom
const messageLoad = function () {
  messageData = JSON.parse(this.responseText).messages;
  domString.domString(messageData);
  return messageData;
};

const messageError = () => {
  console.log("Dis shit broke.");
};

//message json request
const messageRequest = new XMLHttpRequest();
messageRequest.addEventListener("load", messageLoad);
messageRequest.addEventListener("error", messageError);
messageRequest.open("GET", "../data/preloaded.json");
messageRequest.send();

module.exports = { messageLoad, messageError, messageDelete, newMessage };
