const baseURL = "https://ethanbrayza.github.io/wdd230/";
const linksURL = "https://ethanbrayza.github.io/wdd230/data/links.json";

const activityList = document.getElementById("activity-list");

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        // console.log(data);
        displayLinks(data.weeks);
    } catch (error) {
        console.error("Error fetching links data:", error);
    }
}

function displayLinks(weeks) {
    weeks.forEach((week) => {
        const weekElement = document.createElement("li");
        let weekText = week.week + " ";
        const linksList = document.createElement("ul");

        // Loop through each link in the week
        week.links.forEach((link, index) => {
            const a = document.createElement("a");
            a.href = baseURL + link.url;
            a.textContent = link.title;

            if (index > 0) {
                weekText += " | ";
            }
            weekText += a.outerHTML;
        });

        weekElement.innerHTML = weekText;
        activityList.appendChild(weekElement);
    });
}

getLinks();