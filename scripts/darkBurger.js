/* Hamburger Button */
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

 /* dark Mode */
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const header = document.querySelector("header");
const menu = document.querySelector("#menu");
const footer = document.querySelector("footer");
const body = document.querySelector("body");
const card = document.querySelector(".card");
const mode = document.querySelector("#mode");


modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("☆")) {
        // Dark mode colors
        main.style.background = "#343434";
        main.style.color = "#fff";

        header.style.background = "#1c1c1c";
        header.style.color = "#fff";

        modeButton.style.color = "#fff";

        menu.style.background = "#1c1c1c";
        menu.style.color = "#fff";

        footer.style.background = "#1c1c1c";
        footer.style.color = "#fff";

        body.style.background = "#272727";

        card.style.border = "1px solid #555";

        // Change link text color inside the .card section to black
        const cardLinks = document.querySelectorAll('.card a');
        cardLinks.forEach(link => {
            link.style.color = "#fff";
        });

        // Change white text on #b19470 backgrounds to black
        const whiteTextOnBackground = document.querySelectorAll('#b19470 *:not(h2)');
        whiteTextOnBackground.forEach(element => {
            element.style.color = "#000";
        });

        modeButton.textContent = "☀";
    }
    else {
        // Light mode colors
        main.style.background = "#f8fae5";
        main.style.color = "#000";

        header.style.background = "#43766c";
        header.style.color = "#fff";

        modeButton.style.color = "#fff";

        menu.style.background = "#b19470";
        menu.style.color = "#000";

        footer.style.background = "#76453B";
        footer.style.color = "#fff";

        body.style.background = "#f8fae5";

        card.style.border = "1px solid #272626";

        // Reset link text color inside the .card section to blue (or your default color)
        const cardLinks = document.querySelectorAll('.card a');
        cardLinks.forEach(link => {
            link.style.color = "blue"; // Change this to your default link color
        });

        // Reset white text on #b19470 backgrounds to original color
        const whiteTextOnBackground = document.querySelectorAll('#b19470 * :not(h2)');
        whiteTextOnBackground.forEach(element => {
            element.style.color = ""; // Reset to original color
        });

        modeButton.textContent = "☆";
    }
});