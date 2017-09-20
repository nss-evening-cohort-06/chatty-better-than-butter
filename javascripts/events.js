"use strict";

const pressEnter = require("./addMessages");

// function entPress() {
let input = document.getElementById("message-input");
input.focus();
input.addEventListener('keydown', function(e){
		if (e.keyCode === 13) {
      console.log(input.value);
      //pressEnter.newMessage(input.value);
    }
	});
// }
