"use strict";

const dom = require("./dom.js");
const xhr = require("./xhr.js");

const clearBtn = document.getElementById("clear-messages");

// after every change in the dom run this to see if btn needs to be enabled or disabled...
const checkClearBtn = (messageArray) => {
	
	if (messageArray.length === 0 && clearBtn.hasAttribute("disabled") === false) {
		clearBtn.setAttribute("disabled", "disabled");
	} else if (messageArray.length > 1) {
		clearBtn.removeAttribute("disabled");
		console.log("made it to the delete function");
	}

};


const clearAll = () => {

// function tied to click event in Events.js when clearBtn is selected...

// Empty chat container
	// DomString = "";

// AND array becomes empty
	// array = [];

// Then reruns domstring function
// OR just runs the checkClearBtn function
};

module.exports = {checkClearBtn, clearAll};