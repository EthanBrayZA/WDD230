const password1 = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const message = document.querySelector("#formmessage");

password2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
    if (password1.value !== password2.value) {
        message.textContent = "❗The Passwords DO NOT MATCH!";
        message.style.visibility = "show";
        password2.style.backgroundColor = "#fff0f3";
        password2.value = "";
        password2.focus();
    } else {
        message.style.display = "none";
        password2.style.backgroundColor = "#fff";
        password2.style.color = "#000";
    }
}

// range slider
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rating");

// RANGE event listener
range.addEventListener("change", displayRatingValue);
range.addEventListener("input", displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}