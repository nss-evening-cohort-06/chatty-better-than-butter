"use strict";

const domFile = require("./dom");
console.log(domFile);

let emojies = {
  ":love:": `<img src="../images/emoji/Love.png" class="emoji">`,
  ":hate:": `<img src="../images/emoji/Hate.png" class="emoji"">`,
  ":happy:": `<img src="../images/emoji/Happy.png" class="emoji"">`,
  ":sad:": `<img src="../images/emoji/Sad.png" class="emoji"">`,
  ":tired:": `<img src="../images/emoji/Tired.png" class="emoji"">`,
  ":sick:": `<img src="../images/emoji/Sick.png" class="emoji"">`,
  ":angry:": `<img src="../images/emoji/Angry.png" class="emoji"">`,
  ":crazy:": `<img src="../images/emoji/Crazy.png" class="emoji"">`
};

// Get message text
//Look for :+ text sequence
//Replace text between colons with emoji
const parseEmoji = (messageString) => {
  for (let key in emojies) {
        if (messageString.includes(key)) {
          messageString = messageString.replace(key, emojies[key]);
        }
    }
    return messageString;
};
module.exports = {parseEmoji};
