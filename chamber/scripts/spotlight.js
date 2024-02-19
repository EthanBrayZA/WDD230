const URL = "data/members.json";
const directoryCards = document.querySelector('.spotlight-cards');

async function getCompanieSpotlightData() {
    try {
        const response = await fetch(URL);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayCompanieSpotlight(data.members);

        } else {
            console.error("There was an error loading the data!!");
        }
    } catch (error) {
        console.error("An error occurred while fetching data:", error);
    }
}


function displayCompanieSpotlight(members) {
    // filter Gold & Silver companies
    const filteredCompanies = members.filter(member => member.membershiplevel === "Silver Membership" || member.membershiplevel === "Gold Membership");

    // Shuffle Array randomly
    const shuffleCompanies = shuffleArray(filteredCompanies);

    // Display the first 3 companies (or fewer if there are less than 3)
    for (let i = 0; i < Math.min(3, shuffleCompanies.length); i++) {
        const company = shuffleCompanies[i];
        let spotlightCard = createSpotlightCard(company);
        directoryCards.appendChild(spotlightCard);
    }

}

//  Fisher-Yates (aka Knuth) shuffle algorithm
function shuffleArray(array) {
    const shuffleArray = [...array];
    for (let i = shuffleArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffleArray[i], shuffleArray[j]] = [shuffleArray[j], shuffleArray[i]];
    }
    return shuffleArray;
}

function createSpotlightCard(member) {
    let card = document.createElement('div');
    let name = document.createElement('h3');
    let addresse = document.createElement('p');
    let phone = document.createElement('p');
    let img = document.createElement('img');

    name.textContent = `${member.name}`;
    addresse.textContent = `${member.addresse}`;
    phone.textContent = `${member.phone}`;
    img.setAttribute("src", member.image);
    img.setAttribute('alt', `${member.name} Company Logo`);
    img.setAttribute('loading', 'lazy');
    img.setAttribute('width', '100');
    img.setAttribute('height', '100');

    card.appendChild(name);
    card.appendChild(addresse);
    card.appendChild(phone);
    card.appendChild(img);

    // Add border style
    card.style.border = '1px solid black';
    card.style.borderRadius = '10px';
    
    return card;
}




getCompanieSpotlightData();