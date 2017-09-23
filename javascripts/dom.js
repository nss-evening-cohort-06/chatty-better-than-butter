"use strict";

const domString = (messages) => {
  let messageString = "";
  for (let i = 0; i < messages.length; i++) {
    messageString += `<div class="messageCard">
                        <p> ${messages[i].timeStamp} </p>
                        <p id="message">${messages[i].message}</p>
                        <button class="deleteBtn">Delete</button>
									    </div > `;
  }
  writeToDom(messageString);
};

const writeToDom = (strang) => {
  let messageContainer = document.getElementById("message-board");
  messageContainer.innerHTML = strang;
};

module.exports = { domString, writeToDom };