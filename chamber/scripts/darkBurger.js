/* Hamburger Button */
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

/* dark Mode 
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const header = document.querySelector("header");
const menu = document.querySelector("#menu");
const footer = document.querySelector("footer");
const body = document.querySelector("body");
const mode = document.querySelector("#mode");


modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("☆")) {
        // Dark mode colors
        main.style.background = "#0F1035";
        main.style.color = "#DCF2F1";

        header.style.background = "#365486";
        header.style.color = "#d6f7ff";

        modeButton.style.color = "#d6f7ff";

        menu.style.background = "#365486";
        menu.style.color = "#d6f7ff";

        footer.style.background = "#365486";
        footer.style.color = "#d6f7ff";

        body.style.background = "#0F1035";

        modeButton.textContent = "☀";
    }
    else {
        // Light mode colors
        main.style.background = "#fff";
        main.style.color = "#0F1035";

        header.style.background = "#0F1035";
        header.style.color = "#7FC7D9";

        modeButton.style.color = "#d6f7ff";

        menu.style.background = "#0F1035";
        menu.style.color = "#0F1035";

        footer.style.background = "#0F1035";
        footer.style.color = "#DCF2F1";

        body.style.background = "#fff";

        modeButton.textContent = "☆";
        
    }
});*/
