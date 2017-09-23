"use strict";

const dom = require("./dom");
let messageData = [];
const clearBtn = document.getElementById("clear-messages");

//when delete button is clicked, function loops through the messageData array
//if that clicked deleteBtn parentNode message matches a message in the array
//it deletes that message from the array
const messageDelete = (timestamp) => {
  for (let i = 0; i < messageData.length; i++) {
    if (messageData[i].timeStamp === timestamp) {
      messageData.splice(i, 1);
    }
  }
  dom.domString(messageData);
  checkClearBtn(messageData);
};

const addCatsToMessage = (array) => {
  for (var i = 0; i < array.length; i++) {
    messageData.push(array[i]);
  }
  dom.domString(messageData);
};

// after every change in the dom run this to see if the clearBtn needs to be enabled or disabled...
const checkClearBtn = (messageArray) => {
  // Checks the array passed to it, if it's empty, give the clear button the attribute 'disabled' and the value 'disabled' along with it, so it's unclickable
  if (messageArray.length === 0) {
    clearBtn.setAttribute("disabled", "disabled");
  } else if (messageArray.length > 0) {
    clearBtn.removeAttribute("disabled");
  }
};

const clearAll = () => {
  // function tied to click event in Events.js when clearBtn is selected...
  messageData = [];
  document.getElementById("message-board").innerHTML = "";
  dom.domString(messageData);
  checkClearBtn(messageData);
};

var messageString = "";

// push newly entered text from input into message array

let newMessage = (text) => {
  let timeStamp = new Date();
  messageData.push({ "message": text, "timeStamp": `${timeStamp}` });
  dom.domString(messageData);
  checkClearBtn(messageData);
};

//loads messages and writes it to the dom
const messageLoad = function () {
  messageData = JSON.parse(this.responseText).messages;
  dom.domString(messageData);
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

module.exports = { messageLoad, messageError, messageDelete, newMessage, messageData, checkClearBtn, clearAll, addCatsToMessage };

