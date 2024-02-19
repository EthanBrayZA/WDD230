// Grid vs List
const gridbutton = document.querySelector("#directory-grid");
const listbutton = document.querySelector("#directory-list");
const display = document.querySelector(".directory-cards");

gridbutton.addEventListener("click", () => {
    display.classList.add("directory-grid");
    display.classList.remove("directory-list");
});

listbutton.addEventListener("click", showList);

function showList() {
    display.classList.add("directory-list");
    display.classList.remove("directory-grid");
}

// members data

const url = "data/members.json";
const directoryCards = document.querySelector('.directory-cards');


async function getCompanieData() {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();

        // console.table(data.prophets);
        displayCompanieCards(data.members);
    } else {
        console.error("There was an error loading the data!!");
    }

}


function displayCompanieCards(members) {
    members.forEach(member => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let addresse = document.createElement('p');
        let phone = document.createElement('p');
        let img = document.createElement('img');
        let website = document.createElement('a');

        name.textContent = `${member.name}`;
        addresse.textContent = `${member.addresse}`;
        phone.textContent = `${member.phone}`;
        img.setAttribute("src", member.image);
        img.setAttribute('alt', `${member.name} Company Logo`);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '270');
        img.setAttribute('height', '380');

        website.textContent = `${member.website}`;

        card.appendChild(name);
        card.appendChild(addresse);
        card.appendChild(phone);
        card.appendChild(img);
        card.appendChild(website);

        directoryCards.appendChild(card);
    })
}

getCompanieData()