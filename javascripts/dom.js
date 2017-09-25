"use strict";

const domString = (messages) => {
  let messageString = "";
  for (let i = 0; i < messages.length; i++) {
    // Assign ID to last message posted only (will be used for scrolling to last message view):
    if(i === messages.length -1){
      messageString += `<div id="lastMessage" class="messageCard">
                        <p class="timestamp">${messages[i].timeStamp}</p>
                        <p id="message">${messages[i].message}</p>
                        <button class="deleteBtn">Delete</button>
                      </div > `;
    }
    else{
      messageString += `<div class="messageCard">
                          <p class="timestamp">${messages[i].timeStamp}</p>
                          <p id="message">${messages[i].message}</p>
                          <button class="deleteBtn">Delete</button>
  									    </div > `;
      }
    }
  writeToDom(messageString);
};

const writeToDom = (strang) => {
  let messageContainer = document.getElementById("message-board");
  messageContainer.innerHTML = strang;
  // Scroll to last message entered:
  let lastMessage = document.getElementById("lastMessage");
  const targetOffset = $('#lastMessage').offset();
  const divScrollTop = $('#message-board').scrollTop();
  $('#message-board').scrollTop(divScrollTop + targetOffset.top - $('#lastMessage').height());
};

module.exports = { domString, writeToDom };