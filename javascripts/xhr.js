"use strict";

let domString = require("./dom");
let messageData = [];


//when delete button is clicked, function loops through the messageData array
//if that clicked deleteBtn parentNode message matches a message in the array
//it deletes that message from the array
let messageDelete = function (message) {
  for (let i = 0; i < messageData.length; i++) {
    if (messageData[i].message.indexOf(message) > -1) {
      console.log("message", message);
      messageData.splice(i, 1);
    }
  }
  domString.domString(messageData);
};

  var messageString = "";


// push newly entered text from input into message array
let newMessage = (text) => {
  let timeStamp = new Date();
  messageData.push({timeStamp, "message": text});
  domString.domString(messageData);
};

//loads messages and writes it to the dom
const messageLoad = function () {
  messageData = JSON.parse(this.responseText).messages;
  domString.domString(messageData);
  console.log("original message data", messageData);
  return messageData;
};

const messageError = function () {
  console.log("Dis shit broke.");
};

//message json request
const messageRequest = new XMLHttpRequest();
messageRequest.addEventListener("load", messageLoad);
messageRequest.addEventListener("error", messageError);
messageRequest.open("GET", "../data/preloaded.json");
messageRequest.send();

//Loads cat.json and writes it to the dom
// const catLoad = function () {
//   var catData = JSON.parse(this.responseText).cats; //responseText gives you a string .parse turns it into JSON array
//   domString(catData);
// };

// const catError = function () {
//   console.log("Dis shit broke.");
// };

// //cat json request
// var catRequest = new XMLHttpRequest();
// catRequest.addEventListener("load", catLoad);
// catRequest.addEventListener("error", catError);
// catRequest.open("GET", "cats.json");
// catRequest.send();

module.exports = { messageLoad, messageError, messageDelete, newMessage };
