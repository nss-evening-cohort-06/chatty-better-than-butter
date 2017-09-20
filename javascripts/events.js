"use strict";

let deleteMessages = require("./deleteMessages");


















let clearBtn = document.getElementById("clear-messages");
clearBtn.addEventListener("click", (event) => {
	deleteMessages.clearAll();
});